import { motion } from 'framer-motion';
import { Loader2, Sparkles } from 'lucide-react';

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
  const sizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  const textSizeClasses = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg'
  };

  const containerClasses = fullScreen 
    ? 'fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm'
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
            className="relative"
            animate={{ rotateY: [0, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl font-bold">M</span>
            </div>
            <motion.div
              className="absolute -top-1 -right-1"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-6 h-6 text-yellow-400" />
            </motion.div>
          </motion.div>
        )}

        <div className="relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <Loader2 className={`${sizeClasses[size]} text-orange-500`} />
          </motion.div>
          
          {/* Orbital dots */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: -360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <div className="relative w-16 h-16">
              <motion.div
                className="absolute w-2 h-2 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"
                style={{ top: 0, left: '50%', transform: 'translateX(-50%)' }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              <motion.div
                className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                style={{ bottom: 0, left: '50%', transform: 'translateX(-50%)' }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
              />
            </div>
          </motion.div>
        </div>

        <motion.p
          className={`${textSizeClasses[size]} font-medium text-muted-foreground text-center`}
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
      message="Preparing your experience..." 
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
