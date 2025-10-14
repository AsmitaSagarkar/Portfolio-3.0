// app/layout.tsx
import './globals.css';
import { Inter, Fira_Code } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react'; // For Vercel analytics
import Nav from '@/components/Nav/Nav';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-fira-code' });

export const metadata = {
  title: 'Asmita Sagarkar | Software Developer Portfolio',
  description: 'Portfolio of Asmita Sagarkar, a Software Developer at TCS specializing in Java, Spring Boot, React, Next.js, and Full-Stack Development. Find projects, skills, and contact information.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <body className={`${inter.variable} ${firaCode.variable} font-sans  antialiased`}>
        <Nav />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}