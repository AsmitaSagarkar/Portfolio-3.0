// components/MotionDiv.tsx
'use client';
import { motion, MotionProps } from 'framer-motion';

// Default animation variants for fade-in/slide-up effect
const defaultVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

// Properties for the main container wrapper
interface MotionDivProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
}

export const MotionDiv = ({ children, className, ...props }: MotionDivProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={defaultVariants}
      transition={{ duration: 0.6, type: 'tween' }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};