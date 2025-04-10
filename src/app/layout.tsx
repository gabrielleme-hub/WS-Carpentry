// Server component
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import MenuNav from './(home)/components/sections/menu';
import Footer from './(home)/components/sections/footer';

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'WS CARPENTRY',
  description: 'Criado pelo Gabriel Leme',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${roboto.variable} ${roboto.variable} antialiased`}>
        <div className="flex min-h-screen flex-col bg-white">
          <MenuNav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
