// components/sections/Hero.tsx
'use client';
import { TypeAnimation } from 'react-type-animation';
import { MotionDiv } from '@/components/lib/motionDiv/motionDiv';
import { Download } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { aboutMeContent, RESUME_LINK } from '@/components/lib/data/data';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section id="hero" className="flex flex-col items-center justify-center min-h-[90vh] py-20 px-4 text-center">
      <MotionDiv className="max-w-4xl" transition={{ staggerChildren: 0.1 }}>
        
        {/* Optimized Image for Next.js */}
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }}>
            <Image 
                src="/images/myImage.png" // Replace with your actual image path in /public
                alt="Asmita Sagarkar Profile" 
                width={170} 
                height={170} 
                className="mx-auto rounded-full border-4 border-primary-accent  mb-8 shadow-2xl"
            />
        </motion.div>

        <motion.p 
            className="text-xl text-textSubtle font-semibold mb-4" 
            transition={{ delay: 0.1 }}
        >
            Hi, I'm Asmita Sagarkar.
        </motion.p>

        <motion.h1 
          className="text-5xl sm:text-7xl font-bold mb-4 text-textSubtle tracking-tighter"
          transition={{ delay: 0.2 }}
        >
          I'm a{' '}
          <span className="text-primary-accent inline-block">
            <TypeAnimation
              sequence={['Full-Stack Developer', 2000, 'Java Developer', 2000, 'Software Engineer', 2000]}
              wrapper="span"
              repeat={Infinity}
              speed={20}
              className="inline-block"
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
            <Link href="#contact" passHref>
                <button className="bg-background-dark text-text1-light py-2 px-6 rounded-lg font-semibold hover:bg-emerald-600 shadow-lg">
                    Contact Me
                </button>
            </Link>
            <a 
                href={RESUME_LINK} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="border border-primary-accent text-primary-accent py-2 px-6 rounded-lg font-semibold hover:bg-primary-accent/10 transition-colors flex items-center"
            >
                Resume 
                <Download className="ml-2 h-4 w-4" />
            </a>
        </motion.div>
      </MotionDiv>
    </section>
  );
};