// app/page.tsx
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      {/* Each section is optimized for Framer Motion via MotionDiv */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      <footer className="py-8 text-center text-subtle-text border-t border-primary-accent/10">
        <p className="text-sm">
          Designed & Built with Next.js, Tailwind CSS, and Framer Motion by Asmita Sagarkar.
        </p>
      </footer>
    </>
  );
}