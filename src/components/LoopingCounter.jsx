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

export const LoopingCounter360 = ({ target = 360, duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useOnScreen({ threshold: 0.5 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
        hasAnimated.current = true;
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
        }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }
  }, [isVisible, target, duration]);

  return <span ref={ref} className="tabular-nums">{count}°</span>;
};
