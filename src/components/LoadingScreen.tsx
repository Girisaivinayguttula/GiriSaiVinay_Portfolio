"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
interface LoadingScreenProps {
  onComplete: () => void;
}
const LoadingScreen = ({
  onComplete
}: LoadingScreenProps) => {
  const [isComplete, setIsComplete] = useState(false);
  const handleAnimationComplete = () => {
    setTimeout(() => {
      setIsComplete(true);
      setTimeout(onComplete, 500);
    }, 1000);
  };
  useEffect(() => {
    // Auto-complete after 3 seconds
    const timer = setTimeout(() => {
      handleAnimationComplete();
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return <AnimatePresence>
      {!isComplete && <motion.div initial={{
      opacity: 1
    }} exit={{
      opacity: 0
    }} transition={{
      duration: 0.5
    }} className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="flex flex-col items-center space-y-8">
            <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 1,
          ease: "easeOut"
        }} className="text-6xl md:text-8xl font-bold text-white">नमस</motion.div>
            <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 1,
          duration: 0.5
        }} className="text-center">
              <p className="text-white/70 text-sm">Welcome to my portfolio</p>
            </motion.div>
          </div>
        </motion.div>}
    </AnimatePresence>;
};
export default LoadingScreen;