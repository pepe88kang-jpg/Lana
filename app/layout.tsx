import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Undangan Pernikahan Ega & Nia',
  description: 'Undangan digital pernikahan Ega Lana Wibowo dan Karunia Riski Apri Hesi.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
