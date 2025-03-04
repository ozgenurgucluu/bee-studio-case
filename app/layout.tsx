import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Manrope } from 'next/font/google';

const manrope = Manrope({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Header />
        <main className="flex-1  min-h-[600px]"> {children} </main>

        <Footer />
      </body>
    </html>
  );
}
