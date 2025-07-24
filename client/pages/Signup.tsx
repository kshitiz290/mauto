import React, { useState } from 'react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Label } from '../components/ui/label';
import { useToast } from '../components/ui/use-toast';
import { ThemeProvider } from '../components/ui/theme-provider';
import { Header } from '../components/ui/header';
import { apiFetch } from '../lib/apiFetch';

const apiBase = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? 'http://localhost:8080' : '';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [password, setPassword] = useState('');
    const [loginId, setLoginId] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();

    // Error states
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [contactError, setContactError] = useState('');

    // Validation helpers
    function isValidEmail(email: string) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    function isStrongPassword(password: string) {
        return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/.test(password);
    }
    function isValidContact(contact: string) {
        return /^\d{10}$/.test(contact);
    }

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        // Final validation before submit
        let valid = true;
        if (loginId.length < 6) {
            setUsernameError('Username must be at least 6 characters.');
            valid = false;
        }
        if (!isValidEmail(email)) {
            setEmailError('Please enter a valid email address.');
            valid = false;
        }
        if (!isStrongPassword(password)) {
            setPasswordError('Password must be at least 8 characters and contain a letter and a number.');
            valid = false;
        }
        if (!isValidContact(contactNo)) {
            setContactError('Contact number must be exactly 10 digits.');
            valid = false;
        }
        if (!valid) return;
        setIsLoading(true);
        try {
            const res = await apiFetch(`${apiBase}/api/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, contact_no: contactNo, password, login_id: loginId })
            });
            const data = await res.json();
            if (res.ok && data.success) {
                toast({ title: 'Signup Successful', description: 'You can now login.', variant: 'success' });
                localStorage.setItem('userID', data.user.id);
                window.location.href = '/login';
            } else {
                toast({ title: 'Signup Failed', description: data.error || 'Could not signup', variant: 'destructive' });
            }
        } catch (err) {
            toast({ title: 'Signup Failed', description: 'Server error', variant: 'destructive' });
        }
        setIsLoading(false);
    };

    return (
        <ThemeProvider defaultTheme="dark" storageKey="codifye-theme">
            <Header />
            <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
                <Card className="max-w-md w-full glass-effect">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-center">Signup</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSignup} className="space-y-6">
                            <div>
                                <Label htmlFor="loginId">Username</Label>
                                <Input
                                    id="loginId"
                                    type="text"
                                    value={loginId}
                                    onChange={e => {
                                        setLoginId(e.target.value);
                                        setUsernameError(e.target.value.length < 6 ? 'Username must be at least 6 characters.' : '');
                                    }}
                                    required
                                    className="mt-2"
                                />
                                {usernameError && <div className="text-red-500 text-xs mt-1">{usernameError}</div>}
                            </div>
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={e => {
                                        setEmail(e.target.value);
                                        setEmailError(isValidEmail(e.target.value) ? '' : 'Please enter a valid email address.');
                                    }}
                                    required
                                    className="mt-2"
                                />
                                {emailError && <div className="text-red-500 text-xs mt-1">{emailError}</div>}
                            </div>
                            <div>
                                <Label htmlFor="contactNo">Contact No</Label>
                                <Input
                                    id="contactNo"
                                    type="text"
                                    value={contactNo}
                                    onChange={e => {
                                        setContactNo(e.target.value);
                                        setContactError(isValidContact(e.target.value) ? '' : 'Contact number must be exactly 10 digits.');
                                    }}
                                    required
                                    className="mt-2"
                                />
                                {contactError && <div className="text-red-500 text-xs mt-1">{contactError}</div>}
                            </div>
                            <div>
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={e => {
                                        setPassword(e.target.value);
                                        setPasswordError(isStrongPassword(e.target.value) ? '' : 'Password must be at least 8 characters and contain a letter and a number.');
                                    }}
                                    required
                                    className="mt-2"
                                />
                                {passwordError && <div className="text-red-500 text-xs mt-1">{passwordError}</div>}
                            </div>
                            <Button
                                type="submit"
                                className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary"
                                disabled={isLoading || !!usernameError || !!emailError || !!passwordError || !!contactError}
                            >
                                {isLoading ? 'Signing up...' : 'Signup'}
                            </Button>
                        </form>
                        <div className="mt-4 text-center">
                            <Button variant="outline" onClick={() => window.location.href = '/login'}>Go to Login</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </ThemeProvider>
    );
}
