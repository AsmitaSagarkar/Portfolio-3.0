"use client";
import Reveal from '@/components/ui/Reveal';
import { DATA } from '@/components/lib/data/data';

const Experience = () => {
  const items = DATA.experience || [];

  return (
    <section id="experience">
      <Reveal>
        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold">Experience</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
          </div>
          <div className="flex flex-col gap-4">
            {items.map((item) => (
              <div key={item.id} className="p-6 bg-slate-900/60 rounded-lg border border-white/6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{item.role} — {item.company}</h3>
                    <p className="text-sm text-slate-400">{item.location} • {item.duration}</p>
                  </div>
                </div>
                <p className="mt-3 text-slate-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Experience;
