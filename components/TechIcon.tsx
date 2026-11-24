/* Simple, recognisable glyphs for the floating tech badges. */

export type TechName =
  | 'flutter' | 'dash' | 'dart' | 'android' | 'ios' | 'firebase'
  | 'supabase' | 'riverpod' | 'bloc' | 'ai' | 'api' | 'flutterflow';

export const techMeta: Record<TechName, { label: string; glow: string }> = {
  flutter: { label: 'Flutter', glow: '#54C5F8' },
  dash: { label: 'Dash', glow: '#29B6F6' },
  dart: { label: 'Dart', glow: '#40C4FF' },
  android: { label: 'Android', glow: '#3DDC84' },
  ios: { label: 'iOS', glow: '#A8B8CC' },
  firebase: { label: 'Firebase', glow: '#FFA000' },
  supabase: { label: 'Supabase', glow: '#3ECF8E' },
  riverpod: { label: 'Riverpod', glow: '#5DD0F5' },
  bloc: { label: 'BLoC', glow: '#4F8CFF' },
  ai: { label: 'AI-assisted', glow: '#C084FC' },
  api: { label: 'REST / GraphQL', glow: '#FF8A65' },
  flutterflow: { label: 'FlutterFlow', glow: '#7C6CFF' },
};

export default function TechIcon({ name, size = 28 }: { name: TechName; size?: number }) {
  const common = { width: size, height: size, 'aria-hidden': true } as const;

  switch (name) {
    case 'flutter':
      return (
        <svg {...common} viewBox="0 0 166 202">
          <path fill="#54C5F8" d="M37.7 128.9 9.8 101 100.4 10.4h55.5z" />
          <path fill="#54C5F8" d="M156.4 93.6h-55.5L80 114.5l27.9 27.9z" />
          <path fill="#01579B" d="M79.9 170.3 100.9 191.2h55.5l-48.5-48.8z" />
          <path fill="#29B6F6" d="M51.9 142.4 79.8 114.5l28 27.9-28 27.9z" />
        </svg>
      );
    case 'dash':
      // eslint-disable-next-line @next/next/no-img-element
      return <img src="/dash-128.png" alt="" width={size} height={size * 1.03} style={{ objectFit: 'contain' }} />;
    case 'dart':
      return (
        <svg {...common} viewBox="0 0 48 48">
          <path fill="#0175C2" d="M10 18 22 6h12l8 8v12L30 38H18l-8-8z" />
          <path fill="#40C4FF" d="M10 18 22 6h12L20 20v16h-2l-8-8z" />
          <path fill="#01579B" d="M20 36h10l12-12v-4L28 34H20z" opacity=".7" />
        </svg>
      );
    case 'android':
      return (
        <svg {...common} viewBox="0 0 48 48">
          <g fill="#3DDC84">
            <path d="M9 29a15 15 0 0 1 30 0z" />
            <rect x="9" y="31" width="30" height="11" rx="3" />
          </g>
          <g stroke="#3DDC84" strokeWidth="2.4" strokeLinecap="round">
            <path d="M15 12l3.5 5.5M33 12l-3.5 5.5" />
          </g>
          <circle cx="18" cy="23.5" r="2" fill="#0B2545" />
          <circle cx="30" cy="23.5" r="2" fill="#0B2545" />
        </svg>
      );
    case 'ios':
      return (
        <svg {...common} viewBox="0 0 48 48">
          <defs>
            <linearGradient id="ios-g" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#E8EEF6" />
              <stop offset="1" stopColor="#9AA9BD" />
            </linearGradient>
          </defs>
          <path fill="url(#ios-g)" d="M25 13c-1.6-4 1.2-8.2 5.4-8.6.3 4.2-2.6 7.9-5.4 8.6z" />
          <path fill="url(#ios-g)" d="M17 15c-5.5 0-9 5-9 11.4C8 34 13 43 17.4 43c2.2 0 3.2-1.3 5.8-1.3s3.4 1.3 5.8 1.3C33.4 43 38 35.6 39 31c-3.8-1.6-5.6-5-5.6-8.2 0-3 1.6-5.6 4.2-7-1.8-2.4-4.4-3.4-7-3.4-2.6 0-4.6 1.4-6.4 1.4S20 15 17 15z" />
        </svg>
      );
    case 'firebase':
      return (
        <svg {...common} viewBox="0 0 48 48">
          <path fill="#FFA000" d="M10 36 16 6l7 13z" />
          <path fill="#F57C00" d="M23 19 28 10l10 26z" />
          <path fill="#FFCA28" d="M10 36 30 46l8-10L28 10z" opacity=".95" />
          <path fill="#FFA000" d="M10 36l20 10 8-10z" opacity=".6" />
        </svg>
      );
    case 'supabase':
      return (
        <svg {...common} viewBox="0 0 48 48">
          <defs>
            <linearGradient id="sb-g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#3ECF8E" />
              <stop offset="1" stopColor="#1F9D63" />
            </linearGradient>
          </defs>
          <path fill="url(#sb-g)" d="M27 4 9 28h14l-2 16 18-24H25z" />
        </svg>
      );
    case 'riverpod':
      return (
        <svg {...common} viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeWidth="3.4">
          <path stroke="#5DD0F5" d="M7 16c5-6 11-6 17 0s12 6 17 0" />
          <path stroke="#29B6F6" d="M7 25c5-6 11-6 17 0s12 6 17 0" />
          <path stroke="#0175C2" d="M7 34c5-6 11-6 17 0s12 6 17 0" />
        </svg>
      );
    case 'bloc':
      return (
        <svg {...common} viewBox="0 0 48 48">
          <path fill="#4F8CFF" d="M24 5 41 14.5v19L24 43 7 33.5v-19z" />
          <path fill="#86B2FF" d="M24 5 41 14.5 24 24 7 14.5z" />
          <path fill="#2F64D8" d="M24 24v19l17-9.5v-19z" />
        </svg>
      );
    case 'ai':
      return (
        <svg {...common} viewBox="0 0 48 48">
          <defs>
            <linearGradient id="ai-g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#C084FC" />
              <stop offset="1" stopColor="#FF6FAE" />
            </linearGradient>
          </defs>
          <path fill="url(#ai-g)" d="M20 6c1.4 8.6 4.4 11.6 13 13-8.6 1.4-11.6 4.4-13 13-1.4-8.6-4.4-11.6-13-13 8.6-1.4 11.6-4.4 13-13z" />
          <path fill="url(#ai-g)" d="M36 28c.8 4.6 2.4 6.2 7 7-4.6.8-6.2 2.4-7 7-.8-4.6-2.4-6.2-7-7 4.6-.8 6.2-2.4 7-7z" />
        </svg>
      );
    case 'api':
      return (
        <svg {...common} viewBox="0 0 48 48" fill="none" stroke="#FF8A65" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 8c-5 0-6 2-6 6v5c0 3-2 5-5 5 3 0 5 2 5 5v5c0 4 1 6 6 6" />
          <path d="M31 8c5 0 6 2 6 6v5c0 3 2 5 5 5-3 0-5 2-5 5v5c0 4-1 6-6 6" />
          <circle cx="24" cy="24" r="2.6" fill="#FF8A65" stroke="none" />
        </svg>
      );
    case 'flutterflow':
      return (
        <svg {...common} viewBox="0 0 48 48">
          <defs>
            <linearGradient id="ff-g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#7C6CFF" />
              <stop offset="1" stopColor="#4B39EF" />
            </linearGradient>
          </defs>
          <rect x="4" y="4" width="40" height="40" rx="11" fill="url(#ff-g)" />
          <path fill="#fff" d="M15 13h18v6H21v4h10v6H21v6h-6z" />
          <path fill="#39D2C0" d="M27 29h6v6h-6z" />
        </svg>
      );
  }
}
