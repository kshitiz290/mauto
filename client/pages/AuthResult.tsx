import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

export default function AuthResult() {
    const navigate = useNavigate();
    const location = useLocation();
    const { toast } = useToast();

    useEffect(() => {
        console.log('[AuthResult] OAuth callback processing...');
        
        // Mark session present
        localStorage.setItem('manacle_session', 'true');
        
        const ensureUserId = async (retryCount = 0) => {
            const maxRetries = 3;
            try {
                console.log(`[AuthResult] Attempt ${retryCount + 1}/${maxRetries + 1} - Fetching user data...`);
                console.log('[AuthResult] Current URL:', window.location.href);
                console.log('[AuthResult] Document cookies:', document.cookie);
                
                const response = await fetch('/api/me', { 
                    credentials: 'include',
                    headers: {
                        'Cache-Control': 'no-cache',
                        'Pragma': 'no-cache'
                    }
                });
                console.log('[AuthResult] Response status:', response.status);
                console.log('[AuthResult] Response headers:', Object.fromEntries(response.headers.entries()));
                
                if (!response.ok) {
                    const errorText = await response.text();
                    console.error('[AuthResult] Error response body:', errorText);
                    throw new Error(`HTTP ${response.status}: ${response.statusText} - ${errorText}`);
                }
                
                const data = await response.json();
                console.log('[AuthResult] Full response data:', JSON.stringify(data, null, 2));
                
                if (data?.authenticated && data?.user?.id) {
                    const userId = String(data.user.id);
                    localStorage.setItem('userID', userId);
                    console.log('[AuthResult] SUCCESS - User ID set in localStorage:', userId);
                    return userId;
                } else if (!data?.authenticated) {
                    console.warn('[AuthResult] User not authenticated, response:', data);
                    if (retryCount < maxRetries) {
                        console.log(`[AuthResult] Retrying in 1 second... (${retryCount + 1}/${maxRetries})`);
                        await new Promise(resolve => setTimeout(resolve, 1000));
                        return ensureUserId(retryCount + 1);
                    }
                    throw new Error(`Not authenticated after ${maxRetries + 1} attempts`);
                } else {
                    console.warn('[AuthResult] Authenticated but no user ID:', data);
                    throw new Error(`No user ID in response: ${JSON.stringify(data)}`);
                }
            } catch (error) {
                console.error(`[AuthResult] Attempt ${retryCount + 1} failed:`, error);
                if (retryCount < maxRetries) {
                    console.log(`[AuthResult] Retrying in 1 second... (${retryCount + 1}/${maxRetries})`);
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    return ensureUserId(retryCount + 1);
                }
                throw error;
            }
        };

        const params = new URLSearchParams(location.search);
        const isNew = params.get('new') === '1';
        
        const goHome = () => {
            console.log('[AuthResult] Redirecting to home for new user');
            navigate('/?new=1', { replace: true });
        };
        
        const goAuto = () => {
            console.log('[AuthResult] Redirecting to auto-site for existing user');
            // Trigger user login event to clear old form data
            window.dispatchEvent(new Event('user-login'));
            navigate('/auto-site', { replace: true });
        };

        if (isNew) {
            toast({ title: 'Welcome!', description: 'Account created successfully. Redirecting…' });
            ensureUserId().then((userId) => {
                console.log('[AuthResult] New user setup complete, userId:', userId);
                setTimeout(goHome, 600);
            }).catch((error) => {
                console.error('[AuthResult] Error setting up new user:', error);
                toast({ title: 'Error', description: 'Failed to complete signup. Please try again.', variant: 'destructive' });
                navigate('/signup', { replace: true });
            });
        } else {
            toast({ title: 'Welcome back!', description: 'Login successful. Redirecting…' });
            ensureUserId().then((userId) => {
                console.log('[AuthResult] Existing user login complete, userId:', userId);
                // Small delay to ensure localStorage is updated
                setTimeout(goAuto, 200);
            }).catch((error) => {
                console.error('[AuthResult] Error during login:', error);
                toast({ title: 'Error', description: 'Failed to complete login. Please try again.', variant: 'destructive' });
                navigate('/login', { replace: true });
            });
        }
    }, [navigate, location.search, toast]);

    return null;
}
