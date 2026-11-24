import Image from 'next/image';
import TechIcon, { techMeta, type TechName } from './TechIcon';

/** Dash centrepiece with labelled tech badges floating around it. */
const badges: { name: TechName; pos: React.CSSProperties; dur: number; delay: number }[] = [
  { name: 'flutter', pos: { top: '4%', left: '6%' }, dur: 5.5, delay: 0 },
  { name: 'dart', pos: { top: '0%', right: '12%' }, dur: 6.2, delay: 1.1 },
  { name: 'riverpod', pos: { top: '30%', left: '-6%' }, dur: 6.8, delay: 0.5 },
  { name: 'bloc', pos: { top: '27%', right: '-6%' }, dur: 5.8, delay: 1.6 },
  { name: 'ai', pos: { top: '56%', right: '-8%' }, dur: 6.4, delay: 0.8 },
  { name: 'firebase', pos: { top: '58%', left: '-9%' }, dur: 7, delay: 2 },
  { name: 'android', pos: { bottom: '4%', left: '4%' }, dur: 6, delay: 1.3 },
  { name: 'ios', pos: { bottom: '2%', right: '6%' }, dur: 6.6, delay: 0.2 },
  { name: 'supabase', pos: { bottom: '-4%', left: '38%' }, dur: 7.2, delay: 2.4 },
];

export default function HeroVisual() {
  return (
    <div className="hero-visual" role="img" aria-label="Dash, the Flutter mascot, surrounded by the technologies Swati works with">
      <div className="hv-glow" />
      <div className="hv-ring" />
      <div className="hv-ring hv-ring-2" />
      <div className="hv-dash">
        <Image src="/dash-480.png" alt="" width={480} height={495} priority />
        <div className="hv-shadow" />
      </div>
      {badges.map((b) => (
        <div
          key={b.name}
          className="hv-badge"
          style={{ ...b.pos, ['--dur' as string]: `${b.dur}s`, ['--delay' as string]: `-${b.delay}s`, ['--glow' as string]: techMeta[b.name].glow }}
        >
          <span className="hv-ico"><TechIcon name={b.name} size={24} /></span>
          {techMeta[b.name].label}
        </div>
      ))}
    </div>
  );
}
