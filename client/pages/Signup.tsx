import { useState } from 'react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Label } from '../components/ui/label';
import { useToast } from '../components/ui/use-toast';
import { ThemeProvider } from '../components/ui/theme-provider';
import { Header } from '../components/ui/header';
import { apiFetch } from '../lib/apiFetch';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, User, Phone, UserPlus } from 'lucide-react';
import { GoogleIcon } from '../components/ui/google-icon';

const apiBase = window.location.origin;

export default function Signup() {
    const [email, setEmail] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [password, setPassword] = useState('');
    const [loginId, setLoginId] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
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
                credentials: 'include',
                body: JSON.stringify({ email, contact_no: contactNo, password, login_id: loginId })
            });
            const data = await res.json();
            if (res.ok && data.success) {
                toast({
                    title: 'Thank you for registering with us!',
                    description: 'Welcome to Manacle! You are now signed in.',
                    variant: 'default',
                });
                if (data.user?.id) localStorage.setItem('userID', data.user.id);
                localStorage.setItem('manacle_session', 'true');
                setTimeout(() => {
                    window.location.href = '/?new=1';
                }, 1200);
            } else {
                toast({ title: 'Signup Failed', description: data.error || 'Could not signup', variant: 'destructive' });
            }
        } catch (err) {
            toast({ title: 'Signup Failed', description: 'Server error', variant: 'destructive' });
        }
        setIsLoading(false);
    };

    return (
        <ThemeProvider defaultTheme="light" storageKey="manacle_theme">
            <Header />
            <div className="min-h-screen relative overflow-hidden bg-background text-foreground">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/20 to-background">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.3),transparent_50%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--accent)/0.2),transparent_50%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(var(--primary)/0.2),transparent_50%)]" />
                </div>

                {/* Floating particles */}
                <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-foreground/20 rounded-full"
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

                <div className="relative z-10 flex items-start justify-center p-4 pt-32">
                    <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                        {/* Left Column - Signup Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="w-full max-w-md mx-auto lg:mx-0"
                        >
                            <Card className="backdrop-blur-xl bg-card/80 border-border shadow-2xl">
                                <CardHeader className="text-center pb-1">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                        className="mx-auto w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mb-2"
                                    >
                                        <UserPlus className="w-6 h-6 text-primary-foreground" />
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                                            Create Account
                                        </CardTitle>
                                        <p className="text-muted-foreground mt-1">Join us today</p>
                                    </motion.div>
                                </CardHeader>
                                <CardContent className="pt-3">
                                    <motion.form
                                        onSubmit={handleSignup}
                                        className="space-y-3"
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
                                            <Label htmlFor="loginId" className="text-foreground font-medium flex items-center gap-2">
                                                <User className="w-4 h-4" />
                                                Username
                                            </Label>
                                            <div className="relative">
                                                <Input
                                                    id="loginId"
                                                    type="text"
                                                    value={loginId}
                                                    onChange={e => {
                                                        setLoginId(e.target.value);
                                                        setUsernameError(e.target.value.length < 6 ? 'Username must be at least 6 characters.' : '');
                                                    }}
                                                    required
                                                    className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 pl-4 h-12"
                                                    placeholder="Choose a username"
                                                />
                                            </div>
                                            {usernameError && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="text-destructive text-xs mt-1 flex items-center gap-1"
                                                >
                                                    <span>⚠</span> {usernameError}
                                                </motion.div>
                                            )}
                                        </motion.div>

                                        <motion.div
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.6 }}
                                            className="space-y-2"
                                        >
                                            <Label htmlFor="email" className="text-foreground font-medium flex items-center gap-2">
                                                <Mail className="w-4 h-4" />
                                                Email Address
                                            </Label>
                                            <div className="relative">
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    value={email}
                                                    onChange={e => {
                                                        setEmail(e.target.value);
                                                        setEmailError(isValidEmail(e.target.value) ? '' : 'Please enter a valid email address.');
                                                    }}
                                                    required
                                                    className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 pl-4 h-12"
                                                    placeholder="Enter your email"
                                                />
                                            </div>
                                            {emailError && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="text-destructive text-xs mt-1 flex items-center gap-1"
                                                >
                                                    <span>⚠</span> {emailError}
                                                </motion.div>
                                            )}
                                        </motion.div>

                                        <motion.div
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.7 }}
                                            className="space-y-2"
                                        >
                                            <Label htmlFor="contactNo" className="text-foreground font-medium flex items-center gap-2">
                                                <Phone className="w-4 h-4" />
                                                Contact Number
                                            </Label>
                                            <div className="relative">
                                                <Input
                                                    id="contactNo"
                                                    type="text"
                                                    value={contactNo}
                                                    onChange={e => {
                                                        setContactNo(e.target.value);
                                                        setContactError(isValidContact(e.target.value) ? '' : 'Contact number must be exactly 10 digits.');
                                                    }}
                                                    required
                                                    className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 pl-4 h-12"
                                                    placeholder="Enter your phone number"
                                                />
                                            </div>
                                            {contactError && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="text-destructive text-xs mt-1 flex items-center gap-1"
                                                >
                                                    <span>⚠</span> {contactError}
                                                </motion.div>
                                            )}
                                        </motion.div>

                                        <motion.div
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.8 }}
                                            className="space-y-2"
                                        >
                                            <Label htmlFor="password" className="text-foreground font-medium flex items-center gap-2">
                                                <Lock className="w-4 h-4" />
                                                Password
                                            </Label>
                                            <div className="relative">
                                                <Input
                                                    id="password"
                                                    type={showPassword ? "text" : "password"}
                                                    value={password}
                                                    onChange={e => {
                                                        setPassword(e.target.value);
                                                        setPasswordError(isStrongPassword(e.target.value) ? '' : 'Password must be at least 8 characters and contain a letter and a number.');
                                                    }}
                                                    required
                                                    className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 pl-4 pr-12 h-12"
                                                    placeholder="Create a strong password"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                                                >
                                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                                </button>
                                            </div>
                                            {passwordError && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="text-destructive text-xs mt-1 flex items-center gap-1"
                                                >
                                                    <span>⚠</span> {passwordError}
                                                </motion.div>
                                            )}
                                        </motion.div>

                                        <motion.div
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.9 }}
                                        >
                                            <Button
                                                type="submit"
                                                className="w-full h-12 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                                disabled={isLoading || !!usernameError || !!emailError || !!passwordError || !!contactError}
                                            >
                                                {isLoading ? (
                                                    <motion.div
                                                        className="flex items-center gap-2"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                    >
                                                        <motion.div
                                                            className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                                                            animate={{ rotate: 360 }}
                                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                        />
                                                        Creating account...
                                                    </motion.div>
                                                ) : (
                                                    'Create Account'
                                                )}
                                            </Button>
                                        </motion.div>
                                    </motion.form>

                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1.0 }}
                                        className="mt-6 text-center"
                                    >
                                        <div className="relative">
                                            <div className="absolute inset-0 flex items-center">
                                                <div className="w-full border-t border-border" />
                                            </div>
                                            <div className="relative flex justify-center text-sm">
                                                <span className="px-2 bg-card text-muted-foreground">or</span>
                                            </div>
                                        </div>
                                        <motion.div
                                            className="mt-4 google-signup-container"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <Button
                                                variant="outline"
                                                onClick={() => { window.location.href = '/api/auth/google'; }}
                                                className="w-full bg-secondary/80 dark:bg-background/50 border-2 border-border dark:border-border text-foreground hover:bg-secondary hover:text-foreground dark:hover:bg-background/80 dark:hover:text-foreground hover:border-primary/50 dark:hover:border-border/80 h-12 mb-2 flex items-center justify-center gap-3 transition-all duration-200"
                                            >
                                                <GoogleIcon className="w-5 h-5" />
                                                Sign up with Google
                                            </Button>
                                        </motion.div>
                                        <motion.div
                                            className="signin-button-container"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <Button
                                                variant="outline"
                                                onClick={() => window.location.href = '/login'}
                                                className="w-full bg-secondary/80 dark:bg-background/50 border-2 border-border dark:border-border text-foreground hover:bg-secondary hover:text-foreground dark:hover:bg-background/80 dark:hover:text-foreground hover:border-primary/50 dark:hover:border-border/80 h-12 transition-all duration-200"
                                            >
                                                Already have an account? Sign In
                                            </Button>
                                        </motion.div>
                                    </motion.div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Right Column - Company Information */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="hidden lg:block space-y-8"
                        >
                            <div className="text-center lg:text-left">
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-4xl xl:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary/80 to-accent/80 bg-clip-text text-transparent"
                                >
                                    Welcome to MANACLE
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="text-xl text-muted-foreground mb-8 leading-relaxed"
                                >
                                    Transforming Retail Industry with Integrated Technology Solutions
                                </motion.p>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="space-y-6"
                            >
                                <div className="backdrop-blur-sm bg-card/50 rounded-xl p-6 border border-border">
                                    <h3 className="text-lg font-semibold text-orange-400 mb-3 flex items-center gap-2">
                                        <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                                        Sales Force Automation
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Automate field sales, order management, and activity tracking for your sales team with real-time insights.
                                    </p>
                                </div>

                                <div className="backdrop-blur-sm bg-card/50 rounded-xl p-6 border border-border">
                                    <h3 className="text-lg font-semibold text-yellow-400 mb-3 flex items-center gap-2">
                                        <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                                        Distributor Management
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Optimize your distribution network and supply chain for maximum efficiency and growth.
                                    </p>
                                </div>

                                <div className="backdrop-blur-sm bg-card/50 rounded-xl p-6 border border-border">
                                    <h3 className="text-lg font-semibold text-pink-400 mb-3 flex items-center gap-2">
                                        <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                                        Visual Merchandising
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Enhance product presentation and customer experience with smart merchandising solutions.
                                    </p>
                                </div>

                                <div className="backdrop-blur-sm bg-card/50 rounded-xl p-6 border border-border">
                                    <h3 className="text-lg font-semibold text-green-400 mb-3 flex items-center gap-2">
                                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                                        Attendance & Leave Management
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Streamline workforce management with automated attendance tracking and leave processing.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="text-center lg:text-left pt-6"
                            >
                                <p className="text-muted-foreground text-sm mb-4">
                                    Join thousands of businesses already transforming their operations
                                </p>
                                <div className="flex items-center justify-center lg:justify-start gap-4 text-xs text-muted-foreground">
                                    <span className="flex items-center gap-1">
                                        <span className="w-1 h-1 bg-green-400 rounded-full"></span>
                                        Trusted by 500+ companies
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                                        99.9% uptime guarantee
                                    </span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}
