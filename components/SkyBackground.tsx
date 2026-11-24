'use client';

import { useEffect, useRef } from 'react';
import TechIcon, { techMeta, type TechName } from './TechIcon';

/**
 * Calm animated backdrop: a gradient sky, twinkling stars (night theme) and a
 * small set of tech icons that float gently and drift with the mouse (parallax).
 */

type Floater = { name: TechName; top: number; left: number; size: number; dur: number; delay: number; depth: number };

const floaters: Floater[] = [
  { name: 'flutter', top: 12, left: 6, size: 54, dur: 7, delay: 0, depth: 1 },
  { name: 'dash', top: 70, left: 4, size: 64, dur: 8, delay: 1.2, depth: 1.4 },
  { name: 'dart', top: 38, left: 2, size: 40, dur: 9, delay: 2, depth: 0.6 },
  { name: 'riverpod', top: 86, left: 22, size: 42, dur: 7.5, delay: 0.6, depth: 0.8 },
  { name: 'android', top: 8, left: 44, size: 40, dur: 8.5, delay: 1.8, depth: 0.7 },
  { name: 'ai', top: 90, left: 52, size: 44, dur: 6.5, delay: 0.3, depth: 1.1 },
  { name: 'ios', top: 14, left: 93, size: 44, dur: 9.5, delay: 1, depth: 0.9 },
  { name: 'firebase', top: 46, left: 95, size: 42, dur: 7.8, delay: 2.4, depth: 0.7 },
  { name: 'bloc', top: 76, left: 90, size: 46, dur: 8.2, delay: 0.9, depth: 1.2 },
  { name: 'supabase', top: 60, left: 74, size: 36, dur: 9, delay: 1.5, depth: 0.5 },
  { name: 'flutterflow', top: 30, left: 78, size: 38, dur: 8.8, delay: 2.8, depth: 0.6 },
  { name: 'api', top: 52, left: 26, size: 34, dur: 10, delay: 3.2, depth: 0.5 },
  { name: 'flutter', top: 94, left: 80, size: 34, dur: 9.2, delay: 2.2, depth: 0.5 },
  { name: 'dash', top: 26, left: 60, size: 40, dur: 10.5, delay: 3.6, depth: 0.6 },
];

export default function SkyBackground() {
  const starsRef = useRef<HTMLCanvasElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  // Stars
  useEffect(() => {
    const c = starsRef.current!;
    const ctx = c.getContext('2d')!;
    const root = document.documentElement;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let W = 0, H = 0, raf = 0;
    let stars: { x: number; y: number; r: number; p: number }[] = [];

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      W = window.innerWidth; H = window.innerHeight;
      c.width = W * dpr; c.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      stars = Array.from({ length: Math.round(W / 9) }, () => ({
        x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.3, p: Math.random() * 6,
      }));
    };
    const frame = (t: number) => {
      ctx.clearRect(0, 0, W, H);
      if (root.dataset.theme === 'dark') {
        ctx.fillStyle = '#CFEFFF';
        for (const s of stars) {
          ctx.globalAlpha = 0.3 + 0.6 * Math.abs(Math.sin(t / 1600 + s.p));
          ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fill();
        }
        ctx.globalAlpha = 1;
      }
      if (!reduced) raf = requestAnimationFrame(frame);
    };
    resize();
    raf = requestAnimationFrame(frame);
    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  // Mouse parallax for the floating icons
  useEffect(() => {
    const layer = layerRef.current!;
    let tx = 0, ty = 0, x = 0, y = 0, raf = 0;
    const onMove = (e: MouseEvent) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 2;
      ty = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    const tick = () => {
      x += (tx - x) * 0.05; y += (ty - y) * 0.05;
      layer.style.setProperty('--px', x.toFixed(3));
      layer.style.setProperty('--py', y.toFixed(3));
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('mousemove', onMove); };
  }, []);

  return (
    <>
      <div className="sky" aria-hidden />
      <canvas ref={starsRef} className="sky-canvas stars" aria-hidden />
      <div ref={layerRef} className="float-layer" aria-hidden>
        {floaters.map((f, i) => (
          <div
            key={i}
            className="floater"
            style={{
              top: `${f.top}%`, left: `${f.left}%`,
              ['--d' as string]: f.depth,
              ['--dur' as string]: `${f.dur}s`,
              ['--delay' as string]: `-${f.delay}s`,
              ['--glow' as string]: techMeta[f.name].glow,
            }}
          >
            <div className={`floater-bob ${f.name === 'dash' ? 'is-dash' : ''}`} style={{ width: f.size, height: f.size }}>
              <TechIcon name={f.name} size={Math.round(f.size * (f.name === 'dash' ? 0.95 : 0.56))} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
