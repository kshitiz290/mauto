import { motion } from "framer-motion";
import { Loader2, Sparkles, Zap, CheckCircle } from "lucide-react";
import { Card, CardContent } from "./card";

interface LoadingScreenProps {
  status: string;
  progress: number;
  steps: Array<{
    name: string;
    completed: boolean;
    current: boolean;
  }>;
}

export function LoadingScreen({ status, progress, steps }: LoadingScreenProps) {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="w-full max-w-md mx-4"
      >
        <Card className="glass-effect border-primary/20">
          <CardContent className="p-8 text-center">
            {/* Animated Logo */}
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
              }}
              className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center"
            >
              <Sparkles className="w-10 h-10 text-white" />
            </motion.div>

            {/* Title */}
            <h2 className="text-2xl font-bold mb-2 gradient-text">
              Building Your Website
            </h2>
            <p className="text-foreground/70 mb-6">
              Our AI is crafting your perfect website...
            </p>

            {/* Status */}
            <div className="flex items-center justify-center mb-6">
              <Loader2 className="w-5 h-5 animate-spin text-primary mr-3" />
              <span className="text-lg font-medium">{status}</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-foreground/10 rounded-full h-2 mb-6">
              <motion.div
                className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>

            {/* Steps */}
            <div className="space-y-3">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-3 rounded-lg bg-card/50"
                >
                  <span className="text-sm font-medium">{step.name}</span>
                  <div className="flex items-center">
                    {step.completed ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : step.current ? (
                      <Loader2 className="w-5 h-5 animate-spin text-primary" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-foreground/30" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute top-10 left-10 w-4 h-4 bg-primary/30 rounded-full"
              />
              <motion.div
                animate={{ 
                  y: [0, 20, 0],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute top-20 right-10 w-3 h-3 bg-accent/30 rounded-full"
              />
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{ 
                  duration: 3.5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute bottom-20 left-20 w-2 h-2 bg-primary/40 rounded-full"
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
} 