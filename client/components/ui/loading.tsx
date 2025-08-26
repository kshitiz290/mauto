import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface LoadingProps {
    message?: string;
    size?: 'small' | 'medium' | 'large';
    fullScreen?: boolean;
    showLogo?: boolean;
}

export const Loading = ({
    message = 'Loading...',
    size = 'medium',
    fullScreen = false,
    showLogo = true
}: LoadingProps) => {
    const logoSizes = {
        small: 'w-8 h-8',
        medium: 'w-12 h-12',
        large: 'w-16 h-16'
    };

    const spinnerSizes = {
        small: 'w-4 h-4',
        medium: 'w-6 h-6',
        large: 'w-8 h-8'
    };

    const textSizes = {
        small: 'text-sm',
        medium: 'text-base',
        large: 'text-lg'
    };

    const containerClasses = fullScreen
        ? 'fixed inset-0 z-50 flex items-center justify-center bg-background'
        : 'flex items-center justify-center p-8';

    return (
        <div className={containerClasses}>
            <motion.div
                className="flex flex-col items-center gap-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
            >
                {showLogo && (
                    <motion.div
                        className="flex items-center justify-center"
                        animate={{ rotateY: [0, 360] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <img
                            src="/manacle_logo.png"
                            alt="Manacle Technologies"
                            className={`${logoSizes[size]} object-contain drop-shadow-lg`}
                        />
                    </motion.div>
                )}

                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                    <Loader2 className={`${spinnerSizes[size]} text-orange-500`} />
                </motion.div>

                <motion.p
                    className={`${textSizes[size]} font-medium text-muted-foreground text-center`}
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    {message}
                </motion.p>

                {/* Progress bar */}
                <div className="w-48 h-1 bg-muted rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 rounded-full"
                        initial={{ x: '-100%' }}
                        animate={{ x: ['100%', '-100%'] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            repeatType: "loop"
                        }}
                    />
                </div>
            </motion.div>
        </div>
    );
};

// Page Loading Component
export const PageLoading = () => (
    <Loading
        message="Loading page..."
        size="large"
        fullScreen={true}
        showLogo={true}
    />
);

// Route Loading Component
export const RouteLoading = () => (
    <div className="min-h-screen flex items-center justify-center bg-background">
        <Loading
            message="Loading..."
            size="large"
            showLogo={true}
        />
    </div>
);

// Component Loading
export const ComponentLoading = ({ message }: { message?: string }) => (
    <div className="flex items-center justify-center py-12">
        <Loading
            message={message || "Loading content..."}
            size="medium"
            showLogo={false}
        />
    </div>
);

// Button Loading
export const ButtonLoading = () => (
    <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    >
        <Loader2 className="w-4 h-4" />
    </motion.div>
);

export default Loading;
