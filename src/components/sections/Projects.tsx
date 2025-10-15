// components/sections/Projects.tsx
'use client';
import { MotionDiv } from '@/components/lib/motionDiv/motionDiv';
import { AnimatePresence, motion } from 'framer-motion';
import { projects, projectTags, Project } from '@/components/lib/data/data';
import { useState, useMemo } from 'react';
import { Github, Link as LinkIcon, Info } from 'lucide-react';

const ProjectCard = ({ project }: { project: Project }) => {
    // Example of project overlay for more info
    const [isHovered, setIsHovered] = useState(false);
    const [showDetails, setShowDetails] = useState(false);

    return (
        <motion.div
            layout // Enables smooth position transitions on filter change
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="relative h-72 bg-subtle-text rounded-xl overflow-hidden shadow-2xl group cursor-pointer"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >

            {/* Hover Overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 1}}
                className="bg-primary-accent/5 flex flex-col items-center justify-center p-4"
            >
                <h3 className="text-xl font-bold text-background-dark mb-2">{project.title}</h3>
                <p className="text-sm text-primary-accent font-semibold text-center mb-4">{project.shortDescription}</p>
                
                <div className="flex space-x-4">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="bg-background-dark text-text1-light p-2 rounded-full hover:bg-gray-700 transition-colors ">
                        <Github className="w-5 h-5" />
                    </a>
                    {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="bg-background-dark text-text1-light p-2 rounded-full hover:bg-gray-700 transition-colors">
                            <LinkIcon className="w-5 h-5" />
                        </a>
                    )}
                    <button onClick={() => setShowDetails(true)} className="bg-background-dark text-text1-light p-2 rounded-full hover:bg-gray-700 transition-colors">
                        <Info className="w-5 h-5" />
                    </button>
                </div>
            </motion.div>

            {/* Tags overlay at the bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-2 bg-card-bg/90 flex flex-wrap gap-1">
                {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono text-primary-accent/70 px-2 py-0.5 rounded-md bg-gray-700/50">
                        {tag}
                    </span>
                ))}
            </div>

            {/* Modal for Detailed Description */}
            <AnimatePresence>
                {showDetails && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-background-dark/90 p-4 text-text1-light"
                        onClick={() => setShowDetails(false)}
                    >
                        <motion.div 
                            initial={{ y: 50, scale: 0.9 }}
                            animate={{ y: 0, scale: 1 }}
                            exit={{ y: 50, scale: 0.9 }}
                            className="bg-card-bg max-w-xl w-full p-8 rounded-xl shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h3 className="text-3xl font-bold text-text1-light mb-4">{project.title}</h3>
                            <p className="text-text1-light mb-6">{project.longDescription}</p>
                            <button onClick={() => setShowDetails(false)} className="mt-4 bg-gray-700 text-text1-light py-2 px-4 rounded-lg hover:bg-gray-600">
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredProjects = useMemo(() => {
        if (activeFilter === 'All') return projects;
        return projects.filter(project => project.tags.includes(activeFilter));
    }, [activeFilter]);

    return (
        <section id="projects" className="py-20 px-4 border-t border-primary-accent/10">
            <div className="max-w-7xl mx-auto">
                <MotionDiv className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-textSubtle">My Work</h2>
                    <p className="text-lg text-primary-accent font-semibold">Projects demonstrating my skills and passion across the full stack.</p>
                </MotionDiv>
                
                {/* Filter Tabs */}
                <MotionDiv className="flex flex-wrap justify-center gap-3 mb-12" transition={{ staggerChildren: 0.05 }}>
                    {projectTags.map(tag => (
                        <motion.button
                            key={tag}
                            onClick={() => setActiveFilter(tag)}
                            className={`py-1.5 px-4 rounded-full text-sm font-mono transition-colors ${
                                activeFilter === tag
                                    ? 'bg-primary-accent text-text1-light font-bold shadow-md'
                                    : 'bg-card-bg text-text1-light hover:bg-primary-accent/20'
                            }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {tag}
                        </motion.button>
                    ))}
                </MotionDiv>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};