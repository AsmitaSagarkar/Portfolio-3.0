// components/sections/Contact.tsx
'use client';
import { MotionDiv } from '@/components/lib/motionDiv/motionDiv';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import { socialLinks } from '@/components/lib/data/data';
import { useState } from 'react';

// Reusable Social Link Component
type SocialLinkProps = {
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
};

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon: Icon, text }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="flex items-center p-3 space-x-4 bg-card-bg rounded-lg hover:bg-primary-accent/20 transition-colors shadow-md"
  >
    <Icon className="w-6 h-6 text-primary-accent" />
    <span className="text-text-light hover:text-primary-accent transition-colors font-mono">{text}</span>
  </a>
);

export const Contact = () => {
  const [status, setStatus] = useState({ message: '', isError: false });

  // IMPORTANT: For a real form, this should point to a backend (e.g., Next.js API Route)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call for demonstration
    setStatus({ message: 'Message sent successfully! I will reply soon.', isError: false });
    setTimeout(() => setStatus({ message: '', isError: false }), 5000);
    (e.target as HTMLFormElement).reset(); // Reset form
  };

  return (
    <section id="contact" className="py-20 px-4 border-t border-primary-accent/10">
      <div className="max-w-6xl mx-auto">
        <MotionDiv className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-primary-accent">Get In Touch</h2>
          <p className="text-lg text-subtle-text">I'm currently seeking new opportunities. Let's connect!</p>
        </MotionDiv>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <MotionDiv className="lg:w-2/3">
            <form onSubmit={handleSubmit} className="p-8 bg-card-bg rounded-xl shadow-2xl space-y-6">
              <h3 className="text-2xl font-semibold text-text-light mb-4">Send a quick message</h3>
              
              <input type="text" placeholder="Your Name" required className="w-full p-3 rounded bg-background-dark border border-gray-700 focus:border-primary-accent outline-none text-text-light"/>
              <input type="email" placeholder="Your Email" required className="w-full p-3 rounded bg-background-dark border border-gray-700 focus:border-primary-accent outline-none text-text-light"/>
              <textarea placeholder="Your Message" rows={5} required className="w-full p-3 rounded bg-background-dark border border-gray-700 focus:border-primary-accent outline-none text-text-light"/>
              
              {status.message && (
                <p className={`p-3 rounded text-center font-semibold ${status.isError ? 'bg-red-900 text-red-300' : 'bg-primary-accent/20 text-primary-accent'}`}>
                  {status.message}
                </p>
              )}

              <button type="submit" className="w-full bg-primary-accent text-background-dark py-3 rounded-lg font-bold hover:bg-emerald-600 transition-colors shadow-lg">
                Submit Message
              </button>
            </form>
          </MotionDiv>

          {/* Social Links */}
          <MotionDiv className="lg:w-1/3 space-y-4" transition={{ delay: 0.3 }}>
            <h3 className="text-2xl font-semibold text-text-light mb-6">Find me online</h3>
            <SocialLink href={`mailto:${socialLinks.email}`} icon={Mail} text={socialLinks.email} />
            <SocialLink href={socialLinks.linkedin} icon={Linkedin} text="LinkedIn Profile" />
            <SocialLink href={socialLinks.github} icon={Github} text="GitHub Profile" />
            <SocialLink href={socialLinks.twitter} icon={Twitter} text="Twitter Profile" />
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};