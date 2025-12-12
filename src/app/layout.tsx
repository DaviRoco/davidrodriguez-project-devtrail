import type { Metadata, Viewport } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import RootClientLayout from './ui/components/RootClientLayout';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--body-font',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://davidrodriguez-devtrail.com'),
  title: 'David Rodríguez | Full Stack Developer',
  description:
    'Portfolio of David Rodríguez, a Full Stack Developer specializing in Full-stack development, AI integration, and Cloud Architecture.',
  keywords: [
    'David Rodríguez',
    'Full Stack Developer',
    'React',
    'Next.js',
    'Portfolio',
    'Web Developer',
  ],
  authors: [{ name: 'David Rodríguez' }],
  openGraph: {
    title: 'David Rodríguez - Portfolio',
    description: 'Explore the projects and skills of David Rodríguez.',
    url: 'https://davidrodriguez-devtrail.com',
    siteName: 'David Rodríguez Portfolio',
    images: [
      {
        url: '/profile.jpeg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'David Rodríguez | Full Stack Developer',
    description: 'Portfolio of David Rodríguez.',
    images: ['/profile.jpeg'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
        />
        <link rel="icon" href="/icon.png" />
      </head>
      <body className={outfit.variable}>
        <RootClientLayout>{children}</RootClientLayout>
      </body>
    </html>
  );
}
