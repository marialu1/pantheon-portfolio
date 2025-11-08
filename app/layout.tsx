import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://pantheon-portfolio.vercel.app'),
  title: {
    default: 'The Pantheon | Maria\'s Portfolio',
    template: '%s | The Pantheon'
  },
  description: 'A mythological journey through technology, design, creativity, and career. Explore the four chambers of The Pantheon.',
  keywords: ['portfolio', 'web development', 'AI', 'interior design', 'creative projects', 'Maria Lu'],
  authors: [{ name: 'Maria Lu' }],
  creator: 'Maria Lu',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pantheon-portfolio.vercel.app',
    title: 'The Pantheon | Maria\'s Portfolio',
    description: 'A mythological journey through technology, design, creativity, and career.',
    siteName: 'The Pantheon',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Pantheon | Maria\'s Portfolio',
    description: 'A mythological journey through technology, design, creativity, and career.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
