import type { Metadata } from 'next';
import './globals.css';
import { afacad, SEO } from '@/lib/constants';
import Navigation from '@/components/navigation';
import Favicon from '@/assets/common/favicon.jpg';
import { MaterialThemeProvider } from '@/lib/client-providers';

export const metadata: Metadata = {
  title: SEO.title,
  description: SEO.description,
  icons: Favicon.src,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MaterialThemeProvider>
      <html lang="en">
        <body className={afacad.className}>
          <Navigation />
          <main>{children}</main>
        </body>
      </html>
    </MaterialThemeProvider>
  );
}
