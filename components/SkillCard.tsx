'use client';

import type { MouseEvent } from 'react';
import Reveal from './Reveal';

/** Skill group card with a glow that follows the cursor. */
export default function SkillCard({ icon, title, items, delay }: { icon: string; title: string; items: string[]; delay: number }) {
  const onMove = (e: MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  return (
    <Reveal className="card skill-card" delay={delay} onMouseMove={onMove}>
      <div className="s-ico">{icon}</div>
      <h3>{title}</h3>
      <div className="chips">
        {items.map((s) => <span key={s} className="chip">{s}</span>)}
      </div>
    </Reveal>
  );
}
