import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
};

type Comet = {
  x: number;
  y: number;
  speedX: number;
  speedY: number;
  life: number;
  color: string;
};

export const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    let particles: Particle[] = [];
    let comets: Comet[] = [];
    let fade = 0;
    let cometTimer = 0;

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.6,
      speedX: (Math.random() - 0.5) * 0.2,
      speedY: (Math.random() - 0.5) * 0.2,
    });

    const createComet = (): Comet => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 4 + Math.random() * 2;
      const colors = [
        "rgba(180,220,255,1)",
        "rgba(200,240,255,1)",
        "rgba(255,240,200,1)",
        "rgba(200,200,255,1)",
      ];

      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speedX: Math.cos(angle) * speed,
        speedY: Math.sin(angle) * speed,
        life: 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    };

    const spawnComets = () => {
      const count = Math.random() > 0.7 ? 2 : 1;
      for (let i = 0; i < count; i++) {
        comets.push(createComet());
      }
    };

    const init = () => {
      const width = window.innerWidth;
      let count = 22;

      if (width >= 1600) count = 55;
      else if (width >= 1200) count = 40;
      else if (width >= 768) count = 30;

      particles = Array.from({ length: count }, createParticle);
      comets = [];
      fade = 0;
      cometTimer = 0;
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      fade = Math.min(1, fade + 0.01);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        ctx.fillStyle = `rgba(255,255,255,${0.18 * fade})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      cometTimer++;

      if (cometTimer > 350 + Math.random() * 400) {
        spawnComets();
        cometTimer = 0;
      }

      for (let i = comets.length - 1; i >= 0; i--) {
        const c = comets[i];
        c.x += c.speedX;
        c.y += c.speedY;
        c.life -= 0.004;

        if (c.life <= 0) {
          comets.splice(i, 1);
          continue;
        }

        ctx.shadowBlur = 12;
        ctx.shadowColor = c.color;

        ctx.strokeStyle = `rgba(255,255,255,${c.life})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(c.x, c.y);
        ctx.lineTo(c.x - c.speedX * 6, c.y - c.speedY * 6);
        ctx.stroke();
      }

      animationId = requestAnimationFrame(render);
    };

    resize();
    window.addEventListener("resize", resize);

    init();
    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      {/* Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Туман / лёгкий объём */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at top, rgba(255,255,255,0.05), transparent 65%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Виньетка */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle, transparent 55%, rgba(0,0,0,0.4) 100%)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      {/* Световое пятно */}
      <div
        style={{
          position: "absolute",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.04)",
          filter: "blur(120px)",
          top: "18%",
          left: "35%",
          animation: "float 26s ease-in-out infinite",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <style>{`
        @keyframes float {
          0% { transform: translate(0, 0); }
          50% { transform: translate(20px, -15px); }
          100% { transform: translate(0, 0); }
        }
      `}</style>
    </>
  );
};