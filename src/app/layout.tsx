import './globals.css';
import { Open_Sans } from 'next/font/google';

const sans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Jongstagram',
  description: 'Jongstagram',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={sans.className}>
      <body className=''>{children}</body>
    </html>
  );
}
