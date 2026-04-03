"use client";
import  useScrollReveal  from '@/components/hooks/useScrollReveal';

const Reveal = ({ children, className = "" }) => {
  const [ref, isVisible] = useScrollReveal();
  return (
    <div ref={ref} className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}>
      {children}
    </div>
  );
};
export default Reveal;