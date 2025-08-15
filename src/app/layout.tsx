import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './tailwind.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  applicationName: 'SuIA',
  title: 'SuIA — Serviços com Inteligência Artificial',
  description:
    'Transformamos suas demandas em soluções com inteligência artificial sob medida',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.className} bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
