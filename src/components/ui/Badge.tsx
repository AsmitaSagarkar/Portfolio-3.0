"use client";
const Badge = ({ children, className = "" }:any) => (
  <span className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold bg-white/5 text-slate-300 border border-white/10 ${className}`}>
    {children}
  </span>
);