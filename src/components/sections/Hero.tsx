"use client";
import { Cpu, ArrowUpRight } from 'lucide-react';
import SpotlightCard from '@/components/ui/SpotlightCard';
import Reveal from '@/components/ui/Reveal';
import useTypingEffect  from '@/components/hooks/useTypingEffect';
import { DATA } from '@/components/lib/data/data';

const Badge = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold bg-white/5 text-slate-300 border border-white/10 ${className}`}>
    {children}
  </span>
);

const Hero = () => {
  const tagline = useTypingEffect(DATA.aboutMe.tagline, 30);

  return (
    <section id="about">
       <Reveal>
         <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-4 h-auto md:h-[550px]">
            {/* Main Intro */}
            <SpotlightCard className="col-span-1 md:col-span-4 md:row-span-2 p-8 flex flex-col justify-center md:justify-between bg-gradient-to-b from-slate-900/50 to-black">
               <div className="space-y-6">
                  <div className="flex items-center gap-3">
                     <Badge className="bg-purple-500/20 text-purple-200 border-purple-500/30">Open to work</Badge>
                     <Badge className="bg-cyan-500/20 text-cyan-200 border-cyan-500/30">Software Developer</Badge>
                  </div>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                    I craft <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 animate-gradient-x">intelligent</span> web experiences.
                  </h1>
                  <div className="h-12 md:h-8">
                    <p className="text-xl text-slate-400 font-light font-mono border-r-2 border-purple-500 inline-block pr-2 animate-pulse">
                      {tagline}
                    </p>
                  </div>
               </div>
               <div className="flex items-center gap-4 mt-8">
                  <a href={DATA.socialLinks.github} target="_blank" rel="noreferrer" className="group relative px-6 py-3 bg-white text-black rounded-full font-bold overflow-hidden">
                     <span className="relative z-10 group-hover:text-white transition-colors duration-300">GitHub</span>
                     <div className="absolute inset-0 bg-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                  </a>
                  <a href={DATA.socialLinks.linkedin} target="_blank" rel="noreferrer" className="px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 rounded-full text-white font-medium transition-all backdrop-blur-sm">
                     LinkedIn
                  </a>
               </div>
            </SpotlightCard>

            {/* Photo Card */}
            <SpotlightCard className="col-span-1 md:col-span-2 md:row-span-1 relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-slate-900/40 z-0"></div>
                <div className="absolute inset-0 opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat mix-blend-overlay"></div>
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-purple-500 to-cyan-400 p-[2px] mb-3 group-hover:scale-110 transition-transform duration-500">
                         <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                             <span className="text-2xl">👩🏻‍💻</span>
                         </div>
                    </div>
                    <h3 className="font-bold text-lg">Asmita Sagarkar</h3>
                    <p className="text-slate-400 text-xs">Indore, India</p>
                </div>
            </SpotlightCard>

            {/* Tech Stats */}
            <SpotlightCard className="col-span-1 md:col-span-2 md:row-span-1 p-6 flex flex-col justify-between bg-slate-900/80">
                <div className="flex justify-between items-start">
                    <Cpu className="text-cyan-400" />
                    <ArrowUpRight className="text-slate-600" size={20} />
                </div>
                <div>
                    <div className="text-3xl font-bold text-white">Full Stack</div>
                    <div className="text-sm text-slate-400 mt-1">Java • React • Next.js</div>
                </div>
            </SpotlightCard>
         </div>
       </Reveal>
    </section>
  );
};
export default Hero;