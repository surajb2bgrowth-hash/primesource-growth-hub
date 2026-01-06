import { useEffect, useRef, forwardRef } from 'react';

interface Point {
  x: number;
  y: number;
  age: number;
}

const MouseTrail = forwardRef<HTMLCanvasElement>((_, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points = useRef<Point[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      points.current.push({
        x: e.clientX,
        y: e.clientY,
        age: 0,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Age and filter points
      points.current = points.current
        .map((p) => ({ ...p, age: p.age + 1 }))
        .filter((p) => p.age < 40);

      // Draw trail
      if (points.current.length > 1) {
        ctx.beginPath();
        ctx.moveTo(points.current[0].x, points.current[0].y);

        for (let i = 1; i < points.current.length; i++) {
          const p = points.current[i];
          const alpha = 1 - p.age / 40;
          const radius = (1 - p.age / 40) * 12;

          ctx.lineTo(p.x, p.y);
          
          // Draw glow circle
          ctx.save();
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius);
          gradient.addColorStop(0, `rgba(59, 130, 246, ${alpha * 0.5})`);
          gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }

        // Draw the line
        ctx.strokeStyle = 'rgba(59, 130, 246, 0.3)';
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke();
      }

      // Draw cursor glow
      const cursorGradient = ctx.createRadialGradient(
        mousePos.current.x,
        mousePos.current.y,
        0,
        mousePos.current.x,
        mousePos.current.y,
        20
      );
      cursorGradient.addColorStop(0, 'rgba(59, 130, 246, 0.4)');
      cursorGradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
      ctx.fillStyle = cursorGradient;
      ctx.beginPath();
      ctx.arc(mousePos.current.x, mousePos.current.y, 20, 0, Math.PI * 2);
      ctx.fill();

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: 'screen' }}
    />
  );
});

MouseTrail.displayName = 'MouseTrail';

export default MouseTrail;
