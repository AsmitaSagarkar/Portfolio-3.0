// components/sections/About.tsx
import { MotionDiv } from '@/components/lib/motionDiv/motionDiv';
import { aboutMeContent } from '@/components/lib/data/data';

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 border-t border-primary-accent/10">
      <div className="max-w-6xl mx-auto">
        <MotionDiv className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-primary-accent">About Me</h2>
          <p className="text-lg text-subtle-text">{aboutMeContent.role}</p>
        </MotionDiv>
        
        <div className="flex flex-col md:flex-row items-center gap-12 bg-card-bg p-8 rounded-xl shadow-xl">
          <MotionDiv className="md:w-2/3 text-lg space-y-4">
            {/* The bio is split into paragraphs for better readability and animation control */}
            {aboutMeContent.summary.split('.').filter(s => s.trim()).map((sentence, index) => (
                <p key={index} className="text-text-light/90 leading-relaxed">
                    {sentence.trim()}.
                </p>
            ))}
          </MotionDiv>
          <MotionDiv className="md:w-1/3 w-full flex justify-center">
            <div className="p-4 bg-primary-accent/20 rounded-xl">
                <h3 className="text-xl font-mono font-bold text-primary-accent">Personal Focus</h3>
                <ul className="list-disc list-inside mt-2 text-text-light/90">
                    <li>Java, Servlets, JSP, Spring Boot</li>
                    <li>Full-Stack Development</li>
                    <li>Clean, Modular Code</li>
                    <li>React & Next.js</li>
                </ul>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};