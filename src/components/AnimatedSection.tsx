import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-in' | 'scale-in' | 'slide-up' | 'slide-left' | 'slide-right';
  delay?: number;
  duration?: string;
}

const AnimatedSection = ({ 
  children, 
  className = '', 
  animation = 'fade-up',
  delay = 0,
  duration = '0.6s'
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all ease-out';
    const delayClass = delay > 0 ? `delay-[${delay}ms]` : '';
    
    if (!isVisible) {
      switch (animation) {
        case 'fade-up':
          return `${baseClasses} opacity-0 translate-y-8 ${delayClass}`;
        case 'fade-in':
          return `${baseClasses} opacity-0 ${delayClass}`;
        case 'scale-in':
          return `${baseClasses} opacity-0 scale-95 ${delayClass}`;
        case 'slide-up':
          return `${baseClasses} opacity-0 translate-y-12 ${delayClass}`;
        case 'slide-left':
          return `${baseClasses} opacity-0 translate-x-8 ${delayClass}`;
        case 'slide-right':
          return `${baseClasses} opacity-0 -translate-x-8 ${delayClass}`;
        default:
          return `${baseClasses} opacity-0 translate-y-8 ${delayClass}`;
      }
    }
    
    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100 ${delayClass}`;
  };

  return (
    <div 
      ref={ref} 
      className={cn(getAnimationClasses(), className)}
      style={{ 
        transitionDuration: duration,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;