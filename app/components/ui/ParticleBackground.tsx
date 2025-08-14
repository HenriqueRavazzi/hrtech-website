"use client";

import React, { useRef, useEffect } from 'react';

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (canvas && ctx) {
      let animationFrameId: number;
      const mouse = { x: 0, y: 0 };
      let lastClickTime = 0;

      const resizeCanvas = () => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
      };
      resizeCanvas();

      class Particle {
          x: number;
          y: number;
          size: number;
          speedX: number;
          speedY: number;

          constructor(x: number, y: number, size: number, speedX: number, speedY: number) {
              this.x = x;
              this.y = y;
              this.size = size;
              this.speedX = speedX;
              this.speedY = speedY;
          }

          update() {
              if (this.x > canvas!.width || this.x < 0) this.speedX = -this.speedX;
              if (this.y > canvas!.height || this.y < 0) this.speedY = -this.speedY;
              this.x += this.speedX;
              this.y += this.speedY;
          }

          draw() {
              ctx!.fillStyle = '#5E17EB';
              ctx!.beginPath();
              ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
              ctx!.fill();
          }
      }

      let backgroundParticles: Particle[] = [];
      const mouseParticles: Particle[] = [];
      const MAX_MOUSE_PARTICLES = 200;
      const BACKGROUND_PARTICLES_COUNT = 800;

      const init = () => {
        backgroundParticles = [];
        for (let i = 0; i < BACKGROUND_PARTICLES_COUNT; i++) {
          const size = Math.random() * 1.5 + 1;
          const x = Math.random() * (canvas!.width - size * 2) + size;
          const y = Math.random() * (canvas!.height - size * 2) + size;
          const speedX = Math.random() * 0.4 - 0.2;
          const speedY = Math.random() * 0.4 - 0.2;
          backgroundParticles.push(new Particle(x, y, size, speedX, speedY));
        }
      };

      const connect = () => {
        let opacityValue = 1;
        const allParticles = [...backgroundParticles, ...mouseParticles];

        for (let a = 0; a < allParticles.length; a++) {
          for (let b = a; b < allParticles.length; b++) {
            const distance =
              (allParticles[a].x - allParticles[b].x) * (allParticles[a].x - allParticles[b].x) +
              (allParticles[a].y - allParticles[b].y) * (allParticles[a].y - allParticles[b].y);
            if (distance < (canvas!.width / 7) * (canvas!.height / 7)) {
              opacityValue = 1 - distance / 20000;
              ctx!.strokeStyle = `rgba(94, 23, 235, ${opacityValue})`;
              ctx!.lineWidth = 1;
              ctx!.beginPath();
              ctx!.moveTo(allParticles[a].x, allParticles[a].y);
              ctx!.lineTo(allParticles[b].x, allParticles[b].y);
              ctx!.stroke();
            }
          }
        }
      };
      
      const animate = () => {
          ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

          // Atualizar e desenhar partículas de fundo
          backgroundParticles.forEach((p) => {
            p.update();
            p.draw();
          });

          // Atualizar e desenhar partículas geradas pelo mouse
          mouseParticles.forEach((p) => {
            p.update();
            p.draw();
          });

          connect();
          animationFrameId = requestAnimationFrame(animate);
      };

      const handleResize = () => {
          resizeCanvas();
          init();
      };

      const handleMouseMove = (event: MouseEvent) => {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
        mouseParticles.push(new Particle(mouse.x, mouse.y, 3, Math.random() * 2 - 1, Math.random() * 2 - 1));
      };

      const handleClick = () => {
        const now = Date.now();
        if (now - lastClickTime < 500) return; // Cooldown de 500ms
        lastClickTime = now;

        for (let i = 0; i < 10; i++) { // Adiciona partículas geradas pelo mouse
          mouseParticles.push(
            new Particle(
              mouse.x,
              mouse.y,
              Math.random() * 3 + 1,
              Math.random() * 4 - 2,
              Math.random() * 4 - 2
            )
          );
        }

        // Remover partículas antigas se ultrapassar o limite
        while (mouseParticles.length > MAX_MOUSE_PARTICLES) {
          mouseParticles.shift();
        }
      };

      init();
      animate();

      window.addEventListener('resize', handleResize);
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('click', handleClick);

      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('click', handleClick);
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, []);

  return (
    <canvas 
        ref={canvasRef} 
        style={{
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: -1,
            backgroundColor: '#121212',
        }}
    />
  );
}
