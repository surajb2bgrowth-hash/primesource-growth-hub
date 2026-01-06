import { useEffect, useRef, useState, ReactNode, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-in';
  delay?: number;
  threshold?: number;
}

const AnimatedSection = forwardRef<HTMLDivElement, AnimatedSectionProps>(
  ({ children, className, animation = 'fade-up', delay = 0, threshold = 0.1 }, forwardedRef) => {
    const [isVisible, setIsVisible] = useState(false);
    const internalRef = useRef<HTMLDivElement>(null);
    const ref = (forwardedRef as React.RefObject<HTMLDivElement>) || internalRef;

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    }, [threshold, ref]);

    const animationClasses = {
      'fade-up': 'animate-fade-up',
      'fade-in': 'animate-fade-in',
      'slide-left': 'animate-slide-in-right',
      'slide-right': 'animate-slide-in-left',
      'scale-in': 'animate-scale-in',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'opacity-0',
          isVisible && animationClasses[animation],
          className
        )}
        style={{ animationDelay: `${delay}ms` }}
      >
        {children}
      </div>
    );
  }
);

AnimatedSection.displayName = 'AnimatedSection';

export default AnimatedSection;