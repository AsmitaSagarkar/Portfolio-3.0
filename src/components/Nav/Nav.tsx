'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      navItems.forEach((item) => {
        const section = document.querySelector(item.href) as HTMLElement;
        if (section && scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="backdrop-blur-lg bg-black/10 dark:bg-white/10 border border-white/20 shadow-lg rounded-full px-6 py-3 flex items-center space-x-6">

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

            {activeSection === item.href.replace('#', '') && (
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary-accent rounded-full"></span>
            )}
          </Link>
        ))}

      </div>
    </nav>
  );
}
