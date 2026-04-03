"use client";
import { Code, Server, Database } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import { DATA } from '@/components/lib/data/data';

const Skills = () => {
  return (
    <section id="stack">
       <Reveal>
          <div className="flex items-center gap-4 mb-12">
             <h2 className="text-3xl font-bold">Tech Arsenal</h2>
             <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
             {DATA.skills.map((skill, idx) => (
                <div 
                  key={idx} 
                  className="group relative p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 cursor-none"
                >
                   <div className="flex flex-col gap-3 items-start">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${idx % 2 === 0 ? 'from-purple-500/20 to-blue-500/20 text-purple-300' : 'from-cyan-500/20 to-emerald-500/20 text-cyan-300'}`}>
                         {idx % 3 === 0 ? <Code size={20} /> : idx % 3 === 1 ? <Server size={20} /> : <Database size={20} />}
                      </div>
                      <div>
                         <h4 className="font-medium text-slate-200">{skill.name}</h4>
                         <p className="text-xs text-slate-500">{skill.category}</p>
                      </div>
                   </div>
                   <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-1000 group-hover:w-full" style={{ width: '0%' }}></div>
                   </div>
                </div>
             ))}
          </div>
       </Reveal>
    </section>
  );
};
export default Skills;