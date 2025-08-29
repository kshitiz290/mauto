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
        
        const ensureUserId = async () => {
            try {
                console.log('[AuthResult] Fetching user data...');
                const response = await fetch('/api/me', { credentials: 'include' });
                console.log('[AuthResult] Response status:', response.status);
                
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                }
                
                const data = await response.json();
                console.log('[AuthResult] Response data:', data);
                
                if (data?.authenticated && data?.user?.id) {
                    const userId = String(data.user.id);
                    localStorage.setItem('userID', userId);
                    console.log('[AuthResult] User ID set in localStorage:', userId);
                    return userId;
                } else {
                    console.warn('[AuthResult] Authentication failed or no user ID:', data);
                    throw new Error(`Authentication failed: ${JSON.stringify(data)}`);
                }
            } catch (error) {
                console.error('[AuthResult] Failed to get user ID:', error);
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
