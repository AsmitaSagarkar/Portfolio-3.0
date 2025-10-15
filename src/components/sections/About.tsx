// components/sections/About.tsx
import { MotionDiv } from '@/components/lib/motionDiv/motionDiv';
import { aboutMeContent } from '@/components/lib/data/data';

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 border-t border-primary-accent">
      <div className="max-w-6xl mx-auto">
        <MotionDiv className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-textSubtle">About Me</h2>
          <p className="text-lg text-primary-accent font-semibold">{aboutMeContent.role}</p>
        </MotionDiv>

        <div className="flex flex-col md:flex-row items-center gap-12 p-8 rounded-xl shadow-2xl bg-background">
          
          
          <MotionDiv className="md:w-2/3 text-lg space-y-4">
            {aboutMeContent.summary.split('.').filter(s => s.trim()).map((sentence, index) => (
              <p key={index} className="text-textSubtle leading-relaxed font-semibold">
                {sentence.trim()}.
              </p>
            ))}
          </MotionDiv>

  
          <MotionDiv className="md:w-1/3 w-full flex justify-center">
            <div className="p-6 bg-primary-accent/20 rounded-xl border border-4 border-textSubtle shadow-lg text-center">
              <h3 className="text-xl font-bold text-textSubtle mb-2">
                Asmita Sagarkar
              </h3>
              <p className="text-text-primary-accent font-semibold mb-1">Full-Stack Developer & Problem Solver</p>
              <p className="text-text-primary-accent font-semibold mb-1">Based in India 🇮🇳</p>
              <p className="text-text-primary-accent font-semibold italic">“Turning ideas into clean, functional code.”</p>
            </div>
          </MotionDiv>

        </div>
      </div>
    </section>
  );
};
