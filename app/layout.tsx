import Header from './components/header/Header';
import './globals.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News Net',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
