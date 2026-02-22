import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Alind Dwivedi | Portfolio & Blog',
  description: 'Personal portfolio and technical blog covering AI, Data Engineering, and SWE.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <div className="layout-wrapper">
          <header className="site-header">
            <nav>
              <Link href="/" className="logo">Alind.</Link>
              <div className="nav-links">
                <Link href="/blog">Blog</Link>
              </div>
            </nav>
          </header>
          <main className="main-content">
            {children}
          </main>
          <footer className="site-footer">
            <p>© {new Date().getFullYear()} Alind Dwivedi. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
