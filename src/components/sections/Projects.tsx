"use client";
import { Github, ExternalLink, ChevronRight } from 'lucide-react';
// import Image from 'next/image';
// import type { SyntheticEvent } from 'react';
import SpotlightCard from '@/components/ui/SpotlightCard';
import Reveal from '@/components/ui/Reveal';
import { DATA } from '@/components/lib/data/data';

const Projects = () => {
  return (
    <section id="projects">
      <Reveal>
         <div className="flex items-center gap-4 mb-12">
             <h2 className="text-3xl font-bold">Selected Works</h2>
             <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DATA.projects.map((project) => (
               <SpotlightCard key={project.id} className="group flex flex-col h-[350px]">
                  <div className="relative h-[50%] overflow-hidden bg-slate-800">
                     {/* <Image 
                        src={project.imageUrl} 
                        alt="loading"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="w-full h-full object-cover opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                        onError={(e: SyntheticEvent<HTMLImageElement>) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80'; }} 
                     /> */}
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-90"></div>
                     <div className="absolute top-4 right-4 flex gap-2 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="p-2 bg-black/50 backdrop-blur-md rounded-full hover:bg-white hover:text-black transition-colors"><Github size={16} /></a>
                        {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="p-2 bg-black/50 backdrop-blur-md rounded-full hover:bg-white hover:text-black transition-colors"><ExternalLink size={16} /></a>}
                     </div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between relative z-10">
                     <div>
                        <div className="flex gap-2 mb-3">
                           {project.tags.map((tag, i) => (
                              <span key={i} className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">{tag}</span>
                           ))}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">{project.title}</h3>
                        <p className="text-slate-400 text-sm line-clamp-2">{project.shortDescription}</p>
                     </div>
                     <div className="flex items-center text-sm font-medium text-slate-500 group-hover:text-white transition-colors mt-4">
                        View Case Study <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                     </div>
                  </div>
               </SpotlightCard>
            ))}
         </div>
      </Reveal>
    </section>
  );
};

export default Projects;