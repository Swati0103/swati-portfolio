'use client';

import { useEffect, useState } from 'react';
import { profile } from '@/lib/data';

const links = [
  { href: '#snapshot', label: 'Profile' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#ai', label: 'AI' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    setTheme((document.documentElement.dataset.theme as 'dark' | 'light') || 'dark');

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 30);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (y / h) * 100 : 0);
      let current = '';
      document.querySelectorAll<HTMLElement>('section[id]').forEach((s) => {
        if (y >= s.offsetTop - 200) current = s.id;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the phone menu on a tap outside the nav or on Escape.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!(e.target as Element).closest('.nav')) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('pointerdown', onDown);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('pointerdown', onDown); document.removeEventListener('keydown', onKey); };
  }, [open]);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch {}
    setTheme(next);
  };

  return (
    <>
      <div className="progress" style={{ width: `${progress}%` }} />
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <a href="#home" className="logo"><span className="logo-mark">SS</span> Swati.dart</a>
        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={active === l.href.slice(1) ? 'active' : ''} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <a className="nav-cv" href={profile.cvUrl} download={profile.cvFileName} title="Download CV (PDF)">
            <span aria-hidden>⬇</span> <span className="nav-cv-label">Download CV</span>
          </a>
          <button className="icon-btn" onClick={toggleTheme} title="Toggle day / night sky" aria-label="Toggle theme">
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>
          <button
            className="icon-btn menu-btn"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </nav>
    </>
  );
}
