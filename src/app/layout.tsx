import { Metadata } from 'next';
import { Roboto, Pacifico } from 'next/font/google';
import '@/src/styles/globals.css';
import Header from '@/src/app/(home)/_components/Header';

const robotoFont = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

const pacificoFont = Pacifico({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-pacifico',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'The Ko-Samui Bungalows',
  description:
    'Relax in our cozy, Thai-style bungalows just steps from the beach in beautiful Koh Samui. Surrounded by tropical gardens, each bungalow offers comfort, privacy, and a touch of island charm. Perfect for couples, families, or solo travelers, we provide a peaceful retreat with easy access to local attractions, dining, and adventure.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${robotoFont.className} ${pacificoFont.variable}`}>
        <Header />

        <main>{children}</main>
      </body>
    </html>
  );
}
