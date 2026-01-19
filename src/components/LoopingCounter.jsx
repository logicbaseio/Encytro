import { useState, useEffect, useRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

export const LoopingCounter = ({ target = 90, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      if (progress < duration) {
        setCount(Math.min(Math.floor((progress / duration) * target), target));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
        setTimeout(() => {
          startTime = null; 
          setCount(0);
          animationFrame = requestAnimationFrame(animate);
        }, 1500); 
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration]);

  return <span className="tabular-nums">{count}%</span>;
};

export const LoopingCounter20 = ({ target = 20, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      if (progress < duration) {
        setCount(Math.min(Math.floor((progress / duration) * target), target));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
        setTimeout(() => {
           startTime = null;
           setCount(0);
           animationFrame = requestAnimationFrame(animate);
        }, 3000); 
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration]);

  return <span className="tabular-nums pr-2">{count}%</span>;
};

export const LoopingCounter360 = ({ target = 360, duration = 800 }) => {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useOnScreen({ threshold: 0.5 });
  const [isAnimating, setIsAnimating] = useState(false);
  const animationRef = useRef(null);
  const timeoutRef = useRef(null);
  const loopTimeoutRef = useRef(null);

  useEffect(() => {
    if (isVisible) {
      const startAnimation = () => {
        setIsAnimating(true);
        let startTime;
        let animationFrame;

        const animate = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = timestamp - startTime;

          if (progress < duration) {
            const newCount = Math.min(Math.floor((progress / duration) * target), target);
            setCount(newCount);
            animationFrame = requestAnimationFrame(animate);
            animationRef.current = animationFrame;
          } else {
            setCount(target);
            setIsAnimating(false);
            // Wait 2 seconds before looping
            loopTimeoutRef.current = setTimeout(() => {
              setCount(0);
              setIsAnimating(true);
              setTimeout(() => {
                startAnimation();
              }, 50);
            }, 2000);
          }
        };

        animationFrame = requestAnimationFrame(animate);
        animationRef.current = animationFrame;
      };

      // Initial 2 second pause before starting
      timeoutRef.current = setTimeout(() => {
        startAnimation();
      }, 2000);

      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        if (loopTimeoutRef.current) {
          clearTimeout(loopTimeoutRef.current);
        }
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    } else {
      // Reset when not visible
      setCount(0);
      setIsAnimating(false);
    }
  }, [isVisible, target, duration]);

  // Convert count to string
  const countStr = count.toString();
  const digits = countStr.split('');

  return (
    <span ref={ref} className="tabular-nums inline-flex items-center relative" style={{ background: 'linear-gradient(to right, #2dd4bf, #0ea5e9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
      {digits.map((digit, index) => (
        <span 
          key={`${count}-${index}-${isAnimating}`}
          className="inline-block number-slider-digit"
          style={{
            animation: isAnimating ? 'slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
            animationDelay: `${index * 0.05}s`,
            background: 'linear-gradient(to right, #2dd4bf, #0ea5e9)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          {digit}
        </span>
      ))}
      <span className="inline-block ml-1" style={{ background: 'linear-gradient(to right, #2dd4bf, #0ea5e9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>°</span>
      <style>{`
        @keyframes slideUp {
          0% {
            transform: translateY(20px) scale(0.9);
            opacity: 0;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }
        .number-slider-digit {
          display: inline-block;
          will-change: transform, opacity;
        }
      `}</style>
    </span>
  );
};
