import { useEffect, useRef } from 'react';

export const BinaryAnimation = ({ opacity = 0.42 }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    
    // Get parent container dimensions
    const getContainerSize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        const rect = parent.getBoundingClientRect();
        return { width: rect.width, height: rect.height };
      }
      return { width: window.innerWidth, height: window.innerHeight };
    };
    
    const resizeCanvas = () => {
      const { width, height } = getContainerSize();
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.scale(dpr, dpr);
      
      // Update columns based on actual width
      return { width, height };
    };

    let { width, height } = resizeCanvas();
    
    // Use ResizeObserver to watch container size changes
    const resizeObserver = new ResizeObserver(() => {
      const newSize = resizeCanvas();
      width = newSize.width;
      height = newSize.height;
    });
    
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }
    
    window.addEventListener('resize', () => {
      const newSize = resizeCanvas();
      width = newSize.width;
      height = newSize.height;
    });

    const fontSize = 16;
    let columns = Math.floor(width / fontSize);
    let drops = Array(columns).fill(1);
    let speeds = Array(columns).fill(0).map(() => Math.random() * 0.5 + 0.5);

    const draw = () => {
      // Update columns if width changed
      const currentColumns = Math.floor(width / fontSize);
      if (currentColumns !== columns) {
        columns = currentColumns;
        drops = Array(columns).fill(1);
        speeds = Array(columns).fill(0).map(() => Math.random() * 0.5 + 0.5);
      }
      
      // Fade effect for trailing - lighter fade to show more
      ctx.fillStyle = 'rgba(15, 23, 42, 0.05)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `bold ${fontSize}px 'Courier New', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = Math.random() > 0.5 ? '1' : '0';
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Varying opacity for depth effect - reduced for readability
        const opacity = Math.random() * 0.3 + 0.3;
        const isHighlight = Math.random() > 0.92;
        
        // Teal/cyan gradient colors - reduced opacity
        if (isHighlight) {
          ctx.fillStyle = `rgba(20, 184, 166, ${Math.min(opacity + 0.2, 0.6)})`; // Brighter teal for highlights
        } else {
          ctx.fillStyle = `rgba(45, 212, 191, ${opacity})`; // Standard teal
        }
        
        ctx.fillText(text, x, y);

        // Reset drop when it reaches bottom
        if (y > height && Math.random() > 0.97) {
          drops[i] = 0;
          speeds[i] = Math.random() * 0.5 + 0.5; // Randomize speed
        }
        
        drops[i] += speeds[i];
      }
    };

    const interval = setInterval(draw, 35);

    return () => {
      clearInterval(interval);
      resizeObserver.disconnect();
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0"
      style={{ pointerEvents: 'none', opacity }}
    />
  );
};
