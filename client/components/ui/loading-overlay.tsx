import { motion, AnimatePresence } from 'framer-motion';
import { Loading } from './loading';

interface LoadingOverlayProps {
  isVisible: boolean;
  message?: string;
  onClose?: () => void;
  allowClose?: boolean;
}

export const LoadingOverlay = ({ 
  isVisible, 
  message = 'Processing...', 
  onClose,
  allowClose = false 
}: LoadingOverlayProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={allowClose ? onClose : undefined}
        >
          <motion.div
            className="relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Loading 
              message={message} 
              size="large" 
              showLogo={true}
            />
            
            {allowClose && onClose && (
              <button
                onClick={onClose}
                className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors"
                aria-label="Close loading"
              >
                ×
              </button>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Skeleton Loading Components
export const SkeletonCard = () => (
  <div className="animate-pulse">
    <div className="bg-muted rounded-lg p-6 space-y-4">
      <div className="h-4 bg-muted-foreground/20 rounded w-3/4"></div>
      <div className="space-y-2">
        <div className="h-3 bg-muted-foreground/20 rounded"></div>
        <div className="h-3 bg-muted-foreground/20 rounded w-5/6"></div>
      </div>
      <div className="h-8 bg-muted-foreground/20 rounded w-1/4"></div>
    </div>
  </div>
);

export const SkeletonList = ({ items = 3 }: { items?: number }) => (
  <div className="space-y-4">
    {Array.from({ length: items }).map((_, i) => (
      <div key={i} className="animate-pulse flex items-center space-x-4">
        <div className="w-12 h-12 bg-muted-foreground/20 rounded-full"></div>
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-muted-foreground/20 rounded w-3/4"></div>
          <div className="h-3 bg-muted-foreground/20 rounded w-1/2"></div>
        </div>
      </div>
    ))}
  </div>
);

export const SkeletonTable = ({ rows = 5, cols = 4 }: { rows?: number; cols?: number }) => (
  <div className="animate-pulse">
    <div className="space-y-3">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="grid gap-4" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
          {Array.from({ length: cols }).map((_, j) => (
            <div key={j} className="h-4 bg-muted-foreground/20 rounded"></div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default LoadingOverlay;
