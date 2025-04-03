
import { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    }

    // Create particles
    const particlesArray: Particle[] = [];
    const particleCount = Math.min(100, Math.floor(window.innerWidth / 20));
    
    const colors = ["#8A2BE2", "#00CED1", "#ffffff"];

    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 3 + 1;
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const speedX = (Math.random() - 0.5) * 0.5;
      const speedY = (Math.random() - 0.5) * 0.5;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      particlesArray.push({
        x,
        y,
        size,
        speedX,
        speedY,
        color,
      });
    }

    // Update particles
    const update = () => {
      for (let i = 0; i < particlesArray.length; i++) {
        const p = particlesArray[i];
        
        p.x += p.speedX;
        p.y += p.speedY;
        
        if (p.x > canvas.width) p.x = 0;
        if (p.x < 0) p.x = canvas.width;
        if (p.y > canvas.height) p.y = 0;
        if (p.y < 0) p.y = canvas.height;
      }
    };

    // Connect particles with lines
    const connect = () => {
      const maxDistance = 150;
      
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;
            ctx.strokeStyle = `rgba(138, 43, 226, ${opacity * 0.3})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    // Draw particles
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        const p = particlesArray[i];
        
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      
      connect();
    };

    // Animation loop
    const animate = () => {
      update();
      draw();
      requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0"
    />
  );
};

export default ParticleBackground;
