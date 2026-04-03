"use client";
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

type NavigationProps = {
  activeSection: string;
  setActiveSection: (id: string) => void;
};

const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-xl">
      <div className="bg-black/70 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center justify-between shadow-2xl shadow-purple-900/20">
         <div className="font-bold text-lg tracking-tight flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 animate-pulse"></div>
            Asmita<span className="text-slate-600">.dev</span>
         </div>

         <div className="hidden md:flex items-center gap-1">
           {['about', 'stack', 'projects', 'contact'].map((item) => (
             <button 
               key={item}
               onClick={() => scrollTo(item)}
               className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${activeSection === item ? 'bg-white text-black' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
             >
               {item.charAt(0).toUpperCase() + item.slice(1)}
             </button>
           ))}
         </div>

         <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors">
           {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
         </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
         <div className="absolute top-full left-0 w-full mt-2 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex flex-col gap-2 animate-in slide-in-from-top-5 fade-in duration-200">
           {['about', 'stack', 'projects', 'contact'].map((item) => (
             <button 
               key={item}
               onClick={() => scrollTo(item)}
               className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/10 text-slate-300 transition-colors"
             >
               {item.charAt(0).toUpperCase() + item.slice(1)}
             </button>
           ))}
         </div>
      )}
    </nav>
  );
};
export default Navigation;