import React, { useState } from 'react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Label } from '../components/ui/label';
import { useToast } from '../components/ui/use-toast';
import { ThemeProvider } from '../components/ui/theme-provider';
import { Header } from '../components/ui/header';
import { useNavigate } from 'react-router-dom';

const apiBase = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? 'http://localhost:8080' : '';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const res = await fetch(`${apiBase}/api/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const data = await res.json();
            if (res.ok && data.success) {
                toast({ title: 'Login Successful', description: 'Welcome!', variant: 'success' });
                localStorage.setItem('manacle_session', 'true'); // Remove localStorage
                window.location.href = '/auto-site'; // Redirect to home
                // try {
                //     const progressRes = await fetch("/api/load-form", { credentials: "include" });
                //     if (!progressRes.ok) throw new Error("Could not load form progress");
                //     const progressData = await progressRes.json();
                //     console.log(progressData.step_number);
                //     const formData = typeof progressData.form_data === "string"
                //         ? JSON.parse(progressData.form_data)
                //         : progressData.form_data;
                //     navigate("/auto-site", {
                //         state: {
                //             stepNumber: progressData.step_number,
                //             formData
                //         }
                //     });
                // } catch (progressErr) {
                //     toast({ title: 'Progress Load Failed', description: 'Could not load form progress. Starting at step 0.', variant: 'warning' });
                //     navigate("/auto-site", {
                //         state: {
                //             stepNumber: 0,
                //             formData: {}
                //         }
                //     });
                // }
            } else {
                toast({
                    title: 'Login Failed', description: data.error || 'Invalid credentials', variant: 'destructive'
                });
            }
        } catch (err) {
            toast({ title: 'Login Failed', description: 'Server error', variant: 'destructive' });
        }
        setIsLoading(false);
    };

    return (
        <ThemeProvider defaultTheme="dark" storageKey="codifye-theme">
            <Header />
            <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
                <Card className="max-w-md w-full glass-effect">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleLogin} className="space-y-6">
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required className="mt-2" />
                            </div>
                            <div>
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} required className="mt-2" />
                            </div>
                            <Button type="submit" className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary" disabled={isLoading}>
                                {isLoading ? 'Logging in...' : 'Login'}
                            </Button>
                        </form>
                        <div className="mt-4 text-center">
                            <Button variant="outline" onClick={() => window.location.href = '/signup'}>Go to Signup</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </ThemeProvider>
    );
}
