import { useState, useEffect, createContext, useContext, ReactNode } from 'react';

export interface LoadingState {
    isLoading: boolean;
    message: string;
    progress?: number;
}

export const useLoading = (initialState: boolean = false, initialMessage: string = 'Loading...') => {
    const [loadingState, setLoadingState] = useState<LoadingState>({
        isLoading: initialState,
        message: initialMessage,
        progress: undefined
    });

    const setLoading = (loading: boolean, message?: string, progress?: number) => {
        setLoadingState(prev => ({
            isLoading: loading,
            message: message || prev.message,
            progress: progress
        }));
    };

    const startLoading = (message?: string) => {
        setLoading(true, message);
    };

    const stopLoading = () => {
        setLoading(false);
    };

    const updateProgress = (progress: number, message?: string) => {
        setLoadingState(prev => ({
            ...prev,
            progress,
            message: message || prev.message
        }));
    };

    return {
        ...loadingState,
        setLoading,
        startLoading,
        stopLoading,
        updateProgress
    };
};

// Page transition loading hook
export const usePageLoading = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate minimum loading time for smooth UX
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    return isLoading;
};
