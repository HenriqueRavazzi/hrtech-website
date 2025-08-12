"use client";

import React, { useRef, useEffect } from 'react';

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (canvas && ctx) {
      let particles: Particle[];
      let animationFrameId: number;
      
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

      const init = () => {
          particles = [];
          const numberOfParticles = (canvas!.height * canvas!.width) / 9000;
          for (let i = 0; i < numberOfParticles; i++) {
              const size = Math.random() * 1.5 + 1;
              const x = Math.random() * (canvas!.width - size * 2) + size;
              const y = Math.random() * (canvas!.height - size * 2) + size;
              const speedX = (Math.random() * 0.4) - 0.2;
              const speedY = (Math.random() * 0.4) - 0.2;
              particles.push(new Particle(x, y, size, speedX, speedY));
          }
      };

      const connect = () => {
          let opacityValue = 1;
          for (let a = 0; a < particles.length; a++) {
              for (let b = a; b < particles.length; b++) {
                  const distance = ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x))
                                 + ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));
                  if (distance < (canvas!.width / 7) * (canvas!.height / 7)) {
                      opacityValue = 1 - (distance / 20000);
                      ctx!.strokeStyle = `rgba(255, 255, 255, ${opacityValue})`;
                      ctx!.lineWidth = 1;
                      ctx!.beginPath();
                      ctx!.moveTo(particles[a].x, particles[a].y);
                      ctx!.lineTo(particles[b].x, particles[b].y);
                      ctx!.stroke();
                  }
              }
          }
      };
      
      const animate = () => {
          ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
          particles.forEach(p => {
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
      
      init();
      animate();

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
      }
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
            backgroundColor: '#121212'
        }}
    />
  );
}
