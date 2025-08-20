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
    // Use inline style for transitionDelay instead of dynamic Tailwind class to avoid ambiguity warnings

    if (!isVisible) {
      switch (animation) {
        case 'fade-up':
          return `${baseClasses} opacity-0 translate-y-8`;
        case 'fade-in':
          return `${baseClasses} opacity-0`;
        case 'scale-in':
          return `${baseClasses} opacity-0 scale-95`;
        case 'slide-up':
          return `${baseClasses} opacity-0 translate-y-12`;
        case 'slide-left':
          return `${baseClasses} opacity-0 translate-x-8`;
        case 'slide-right':
          return `${baseClasses} opacity-0 -translate-x-8`;
        default:
          return `${baseClasses} opacity-0 translate-y-8`;
      }
    }

    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`;
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