import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

export default function AuthResult() {
    const navigate = useNavigate();
    const location = useLocation();
    const { toast } = useToast();

    useEffect(() => {
        // Mark session present
        localStorage.setItem('manacle_session', 'true');
        const ensureUserId = async () => {
            try {
                const d = await fetch('/api/me', { credentials: 'include' }).then(r => r.json());
                if (d?.user?.id) localStorage.setItem('userID', d.user.id);
            } catch { }
        };

        const params = new URLSearchParams(location.search);
        const isNew = params.get('new') === '1';
        const goHome = () => navigate('/?new=1', { replace: true });
        const goAuto = () => { window.dispatchEvent(new Event('user-login')); navigate('/auto-site', { replace: true }); };
        if (isNew) {
            toast({ title: 'Thank you!', description: 'Signup successful. Redirecting…' });
            ensureUserId().finally(() => {
                setTimeout(goHome, 600);
            });
        } else {
            ensureUserId().finally(() => {
                // Normal login flow: go to auto-site which will load form using user_id
                goAuto();
            });
        }
    }, []);

    return null;
}
