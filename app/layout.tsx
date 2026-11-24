import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono, Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], variable: '--font-poppins' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '600'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Swati Singh — Flutter & FlutterFlow Developer',
  description:
    'Portfolio of Swati Singh, a Flutter & FlutterFlow developer building high-performance cross-platform mobile apps with clean architecture, smooth animations and AI-assisted workflows.',
  keywords: ['Flutter developer', 'FlutterFlow', 'Dart', 'BLoC', 'Riverpod', 'mobile app developer', 'Swati Singh'],
  openGraph: {
    title: 'Swati Singh — Flutter & FlutterFlow Developer',
    description: 'Cross-platform apps across health, ed-tech, food, mobility and social.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#050D1F',
};

// Applies the saved theme before first paint to avoid a flash of the wrong sky.
const themeScript = `try{var t=localStorage.getItem('theme');if(t)document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning className={`${poppins.variable} ${inter.variable} ${mono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
