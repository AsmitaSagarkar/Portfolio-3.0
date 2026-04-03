"use client";
import { useState } from 'react';
import Navigation from '@/components/layout/Navigation';
import Hero from '@/components/sections/Hero';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Background from '@/components/layout/Background';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="min-h-screen bg-black text-slate-200 font-sans selection:bg-purple-500/30 selection:text-purple-200 relative overflow-hidden">
      <Background />
      
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 flex flex-col gap-32">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}