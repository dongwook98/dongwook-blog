import './globals.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: '동욱의 블로그',
    template: '동욱의 블로그 | %s',
  },
  description: '프론트엔드 개발자 동욱의 블로그',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko' className={openSans.className}>
      <body className='flex flex-col w-full max-w-screen-xl mx-auto'>
        <Header />
        <main className='grow'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
