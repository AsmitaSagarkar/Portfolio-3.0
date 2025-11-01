// components/sections/Hero.tsx
'use client';
import { TypeAnimation } from 'react-type-animation';
import { MotionDiv } from '@/components/lib/motionDiv/motionDiv';
import { Download } from 'lucide-react';
import Link from 'next/link';
import { aboutMeContent, RESUME_LINK } from '@/components/lib/data/data';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section id="hero" className="flex flex-col items-center justify-center min-h-[90vh] px-4 text-center">
      <MotionDiv className="max-w-4xl" transition={{ staggerChildren: 0.1 }}>

        {/* Avatar Replacement (Initials Logo) */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ duration: 0.5 }}
          className="mx-auto rounded-full border-4 border-primary-accent md:w-40 md:h-40 w-24 h-24 flex items-center justify-center md:text-5xl text-3xl font-bold text-primary-accent shadow-2xl mb-8"
        >
          AS
        </motion.div>

        <motion.p className="md:text-3xl text-2xl  text-textSubtle font-semibold mb-4" transition={{ delay: 0.1 }}>
          Hi, I&apos;m Asmita Sagarkar.
        </motion.p>

        <motion.h1 
          className="md:text-5xl text-3xl sm:text-7xl font-bold mb-4 text-textSubtle tracking-tighter"
          transition={{ delay: 0.2 }}
        >
          I&apos;m a{' '}
          <span className="text-primary-accent inline-block">
            <TypeAnimation
              sequence={['Full-Stack Developer', 2000, 'Java Developer', 2000, 'Software Engineer', 2000]}
              repeat={Infinity}
              speed={20}
            />
          </span>
        </motion.h1>

        <motion.p 
          className="text-lg text-subtle-text mb-8 max-w-2xl mx-auto text-textSubtle font-semibold"
          transition={{ delay: 0.3 }}
        >
          {aboutMeContent.tagline}
        </motion.p>

        <motion.div 
          className="flex justify-center space-x-4"
          transition={{ delay: 0.4 }}
        >
          <Link href="#contact">
            <button className="bg-background-dark md:text-xl text-sm text-text1-light py-2 px-7 rounded-lg font-semibold shadow-lg border-4">
              Contact Me
            </button>
          </Link>

          <a 
            href={RESUME_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary-accent md:text-xl text-sm text-primary-accent py-2 px-7 rounded-lg font-semibold flex items-center no-underline border-4"
          >
            Resume 
            <Download className="ml-2 h-4 w-4" />
          </a>
        </motion.div>

      </MotionDiv>
    </section>
  );
};
