"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AppleHelloEnglishEffect } from "@/components/ui/apple-hello-effect";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [isComplete, setIsComplete] = useState(false);

  const handleAnimationComplete = () => {
    setTimeout(() => {
      setIsComplete(true);
      setTimeout(onComplete, 500);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          <div className="flex flex-col items-center space-y-8">
            <AppleHelloEnglishEffect
              speed={1.2}
              onAnimationComplete={handleAnimationComplete}
              className="h-16 md:h-20 text-primary"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.5 }}
              className="text-center"
            >
              <p className="text-muted-foreground text-sm">Welcome to my portfolio</p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;