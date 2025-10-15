// components/sections/Skills.tsx
'use client';
import { MotionDiv } from '@/components/lib/motionDiv/motionDiv';
import { skills, skillCategories } from '@/components/lib/data/data';
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

// Skill Bar Component (Nested for visual appeal)
type SkillBarProps = {
    level: number;
};

const SkillBar = ({ level }: SkillBarProps) => (
    <MotionDiv 
        className="w-full bg-gray-700 rounded-full h-2.5" 
        variants={{ visible: { width: '100%' }, hidden: { width: '0%' } }}
        transition={{ duration: 1, delay: 0.2 }}
    >
        <motion.div
            className="h-2.5 rounded-full bg-primary-accent"
            initial={{ width: 0 }}
            animate={{ width: `${level}%` }}
            transition={{ duration: 1.5, delay: 0.5 }}
        ></motion.div>
    </MotionDiv>
);

export const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredSkills = useMemo(() => {
    if (activeFilter === 'All') return skills;
    return skills.filter(skill => skill.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="skills" className="py-20 px-4 border-t border-primary-accent/10">
      <div className="max-w-6xl mx-auto">
        <MotionDiv className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-textSubtle">My Tech Stack</h2>
          <p className="text-lg text-primary-accent font-semibold">A glimpse into the tools and languages that drive my development work.</p>
        </MotionDiv>

        {/* Filter Tabs */}
        <MotionDiv className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`py-2 px-4 rounded-full text-sm font-mono transition-colors ${
                activeFilter === category
                  ? 'bg-primary-accent text-text1-light font-bold shadow-lg'
                  : 'bg-card-bg text-text1-light hover:bg-primary-accent/20'
              }`}
            >
              {category}
            </button>
          ))}
        </MotionDiv>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSkills.map((skill, index) => (
                <MotionDiv
                    key={skill.name}
                    className="p-4 bg-subtle-text rounded-lg shadow-xl"
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <h3 className="font-mono text-lg text-textSubtle mb-1">{skill.name}</h3>
                    <p className="text-xs text-textSubtle mb-2">{skill.category}</p>
                    <SkillBar level={skill.level} />
                </MotionDiv>
            ))}
        </div>
      </div>
    </section>
  );
};