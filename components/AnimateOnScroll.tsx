
import React, { useEffect, useRef, useState } from 'react';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';
  delay?: number;
  threshold?: number;
  once?: boolean;
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({ 
  children, 
  className = "", 
  variant = 'up',
  delay = 0,
  threshold = 0.15,
  once = true
}) => {
  const domRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && domRef.current) {
            observer.unobserve(domRef.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      });
    }, { 
      threshold,
      rootMargin: '0px 0px -80px 0px' // Triggers slightly earlier for a smoother feel
    });

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);
    
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [threshold, once]);

  const variantClass = `reveal-${variant}`;

  return (
    <div 
      ref={domRef} 
      className={`reveal ${variantClass} ${isVisible ? 'visible' : ''} ${className}`}
      style={{ '--delay': `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
