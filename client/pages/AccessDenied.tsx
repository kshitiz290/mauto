import React from 'react';
import { ThemeProvider } from '../components/ui/theme-provider';
import { Button } from '../components/ui/button';

const AccessDenied = () => {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="codifye-theme">
            <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
                <div className="max-w-md w-full glass-effect p-8 text-center rounded-xl shadow-xl">
                    <h2 className="text-3xl font-bold mb-4 text-red-500">Access Denied</h2>
                    <p className="text-lg mb-2">You are not allowed to view this page.</p>
                    <p className="text-md mb-4">Please login to continue.</p>
                    <Button
                        onClick={() => window.location.href = '/login'}
                        className="w-full bg-gradient-to-r from-primary to-accent mt-4"
                    >
                        Go to Login
                    </Button>
                    <Button
                        onClick={() => window.location.href = '/'}
                        className="w-full bg-gradient-to-r from-primary to-accent mt-4"
                    >
                        Go to Home
                    </Button>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default AccessDenied;