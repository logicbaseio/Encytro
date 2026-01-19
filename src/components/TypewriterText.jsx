import { useState, useEffect } from 'react';

export const TypewriterText = ({ text = "INSIGHT", speed = 150, delay = 2000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timeout = setTimeout(() => {
      if (!isDeleting && currentIndex < text.length) {
        // Typing
        setDisplayedText(text.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else if (!isDeleting && currentIndex === text.length) {
        // Pause before deleting
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, delay);
      } else if (isDeleting && currentIndex > 0) {
        // Deleting
        setDisplayedText(text.substring(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      } else if (isDeleting && currentIndex === 0) {
        // Reset to start typing again
        setIsDeleting(false);
        setDisplayedText('');
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, isPaused, text, speed, delay]);

  return (
    <span className="inline-block">
      {displayedText}
      <span className="animate-pulse inline-block w-0.5 h-[1em] bg-teal-400 ml-1 align-middle">|</span>
    </span>
  );
};
