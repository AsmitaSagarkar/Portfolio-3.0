"use client";
import { Sparkles } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import { DATA } from '@/components/lib/data/data';

const Contact = () => {
  return (
    <section id="contact" className="pb-10">
       <Reveal>
         <div className="bg-gradient-to-br from-slate-900 to-black rounded-3xl p-8 md:p-16 text-center border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            <div className="relative z-10">
               <Sparkles className="w-10 h-10 text-yellow-400 mx-auto mb-6 animate-spin-slow" />
               <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to start a project?</h2>
               <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg">
                 Lets turn your ideas into reality. Reach out for collaborations or just a friendly hello.
               </p>
               <a href={`mailto:${DATA.socialLinks.email}`} className="inline-block px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 active:scale-95 transition-transform shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                 Say Hello 👋
               </a>
               <div className="flex justify-center gap-8 mt-16 opacity-50">
                  <a href={DATA.socialLinks.twitter} className="hover:opacity-100 hover:text-cyan-400 transition-all">Twitter</a>
                  <a href={DATA.socialLinks.linkedin} className="hover:opacity-100 hover:text-purple-400 transition-all">LinkedIn</a>
                  <a href={DATA.socialLinks.github} className="hover:opacity-100 hover:text-white transition-all">GitHub</a>
               </div>
               <div className="mt-10 text-xs text-slate-600">
                  © {new Date().getFullYear()} Asmita Sagarkar. Made with React & Love.
               </div>
            </div>
         </div>
       </Reveal>
    </section>
  );
};
export default Contact;
