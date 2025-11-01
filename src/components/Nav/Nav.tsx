// components/Nav.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.querySelector(item.href) as HTMLElement);
      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        if (section && scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
          setActiveSection(section.id);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto">
      <div className="backdrop-blur-lg bg-black/10 dark:bg-white/10 border border-white/20 shadow-lg rounded-full px-6 py-3 flex items-center justify-between md:space-x-8">

        {/* <Link href="#hero" className="text-lg font-semibold no-underline text-textSubtle hover:text-primary-accent transition-colors">
          Asmita<span className="text-primary-accent">.</span>
        </Link> */}

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative text-sm font-medium no-underline transition-colors ${
                activeSection === item.href.replace('#', '')
                  ? 'text-primary-accent'
                  : 'text-textSubtle hover:text-primary-accent'
              }`}
            >
              {item.name}

              {/* Active underline indicator */}
              {activeSection === item.href.replace('#', '') && (
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary-accent rounded-full"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-primary-accent" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="mt-3 bg-black/20 dark:bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-xl py-4 flex flex-col space-y-3 text-center text-lg font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-textSubtle hover:text-primary-accent no-underline transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
