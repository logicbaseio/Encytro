import { useOnScreen } from '../hooks/useOnScreen';

export const Reveal = ({ children, className = "", delay = 0, direction = "up" }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.15 });
  
  let transformClass = "translate-y-12";
  if (direction === "left") transformClass = "-translate-x-12";
  if (direction === "right") transformClass = "translate-x-12";
  
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${transformClass}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
