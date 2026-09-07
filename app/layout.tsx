import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'David D’Onofrio — Strategic Communications & Public Affairs',
  description: 'David D’Onofrio: senior public affairs and communications leader. RenUSA Senior Vice President, The Casey Group founder, and 30+ years advancing complex projects.',
  metadataBase: new URL('https://dave.donofr.io'),
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.svg' },
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}
