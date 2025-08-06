import React, { useState } from 'react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Label } from '../components/ui/label';
import { useToast } from '../components/ui/use-toast';
import { ThemeProvider } from '../components/ui/theme-provider';
import { Header } from '../components/ui/header';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, Sparkles } from 'lucide-react';

const apiBase = window.location.origin;

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
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
                // toast({ title: 'Login Successful', description: 'Welcome!', variant: 'success' });
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
            <div className="min-h-screen relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 ">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.2),transparent_50%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.2),transparent_50%)]" />
                </div>

                {/* Floating particles */}
                <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white/20 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [-20, -100],
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                duration: Math.random() * 3 + 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        />
                    ))}
                </div>

                <div className="relative mt-10 z-10 min-h-screen flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-full max-w-md"
                    >
                        <Card className="backdrop-blur-xl bg-white/10 border-white/20 shadow-2xl">
                            <CardHeader className="text-center pb-2">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                    className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4"
                                >
                                    <Sparkles className="w-8 h-8 text-white" />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <CardTitle className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                        Welcome Back
                                    </CardTitle>
                                    <p className="text-gray-300 mt-2">Sign in to your account</p>
                                </motion.div>
                            </CardHeader>
                            <CardContent className="pt-6">
                                <motion.form
                                    onSubmit={handleLogin}
                                    className="space-y-6"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <motion.div
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                        className="space-y-2"
                                    >
                                        <Label htmlFor="email" className="text-gray-200 font-medium flex items-center gap-2">
                                            <Mail className="w-4 h-4" />
                                            Email Address
                                        </Label>
                                        <div className="relative">
                                            <Input
                                                id="email"
                                                type="email"
                                                value={email}
                                                onChange={e => setEmail(e.target.value)}
                                                required
                                                className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/20 pl-4 h-12"
                                                placeholder="Enter your email"
                                            />
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.6 }}
                                        className="space-y-2"
                                    >
                                        <Label htmlFor="password" className="text-gray-200 font-medium flex items-center gap-2">
                                            <Lock className="w-4 h-4" />
                                            Password
                                        </Label>
                                        <div className="relative">
                                            <Input
                                                id="password"
                                                type={showPassword ? "text" : "password"}
                                                value={password}
                                                onChange={e => setPassword(e.target.value)}
                                                required
                                                className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/20 pl-4 pr-12 h-12"
                                                placeholder="Enter your password"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                                            >
                                                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                            </button>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.7 }}
                                    >
                                        <Button
                                            type="submit"
                                            className="w-full h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                            disabled={isLoading}
                                        >
                                            {isLoading ? (
                                                <motion.div
                                                    className="flex items-center gap-2"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                >
                                                    <motion.div
                                                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                                                        animate={{ rotate: 360 }}
                                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                    />
                                                    Signing in...
                                                </motion.div>
                                            ) : (
                                                'Sign In'
                                            )}
                                        </Button>
                                    </motion.div>
                                </motion.form>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                    className="mt-6 text-center"
                                >
                                    <div className="relative">
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="w-full border-t border-white/20" />
                                        </div>
                                        <div className="relative flex justify-center text-sm">
                                            <span className="px-2 bg-transparent text-gray-400">or</span>
                                        </div>
                                    </div>
                                    <motion.div
                                        className="mt-4"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Button
                                            variant="outline"
                                            onClick={() => window.location.href = '/signup'}
                                            className="w-full bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/30 h-12"
                                        >
                                            Create New Account
                                        </Button>
                                    </motion.div>
                                </motion.div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </ThemeProvider>
    );
}
