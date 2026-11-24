'use client';

import { useState, type MouseEvent } from 'react';
import { projectFilters, projects, type Project, type ProjectCategory } from '@/lib/data';
import Reveal from './Reveal';

function ProjectCard({ p }: { p: Project }) {
  const onMove = (e: MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-6px)`;
  };
  const onLeave = (e: MouseEvent<HTMLElement>) => { e.currentTarget.style.transform = ''; };

  return (
    <article className="card project" onMouseMove={onMove} onMouseLeave={onLeave}>
      <div className="p-visual" style={{ background: p.gradient }}>
        <span className="p-emoji">{p.emoji}</span>
        <span className="p-tag">{p.tag}</span>
        <div className="phone">
          <div className="screen">
            <div className="bar" style={{ background: p.gradient }}>{p.emoji}</div>
            <div className="row" />
            <div className="row s" />
            <div className="tiles"><div /><div /><div /><div /></div>
          </div>
        </div>
      </div>
      <div className="p-body">
        <h3>{p.name}</h3>
        <p>{p.desc}</p>
        <ul className="features">
          {p.features.map((f) => <li key={f}>{f}</li>)}
        </ul>
        <div className="chips">
          {p.stack.map((s) => <span key={s} className="chip">{s}</span>)}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<'all' | ProjectCategory>('all');
  const visible = projects.filter((p) => filter === 'all' || p.cats.includes(filter));

  return (
    <>
      <Reveal className="filters">
        {projectFilters.map((f) => (
          <button key={f.key} className={`filter ${filter === f.key ? 'active' : ''}`} onClick={() => setFilter(f.key)}>
            {f.label}
          </button>
        ))}
      </Reveal>
      <Reveal className="projects-grid">
        {visible.map((p) => <ProjectCard key={p.name} p={p} />)}
      </Reveal>
    </>
  );
}
