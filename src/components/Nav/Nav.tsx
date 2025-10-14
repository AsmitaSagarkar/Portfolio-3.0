// components/Nav.tsx
'use client';
import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';
import { socialLinks } from '@/components/lib/data/data';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm shadow-lg border-b border-primary-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        <Link href="#hero" className="text-2xl font-bold text-textSubtle hover:text-text-light transition-colors">
          Asmita Sagarkar
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 text-xl font-bold text-textSubtle">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-subtle-text hover:text-primary-accent transition-colors text-textSubtle"
            >
              {item.name}
            </Link>
          ))}
          {/* <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-subtle-text hover:text-primary-accent transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-subtle-text hover:text-primary-accent transition-colors">
            <Linkedin className="w-5 h-5" />
          </a> */}
        </div>

        {/* Mobile Menu (simplified for brevity, typically a hamburger icon is used) */}
        <div className="md:hidden flex items-center">
            {/* You would implement a mobile menu toggle here */}
            <span className="text-primary-accent">Menu</span>
        </div>
      </div>
    </nav>
  );
}