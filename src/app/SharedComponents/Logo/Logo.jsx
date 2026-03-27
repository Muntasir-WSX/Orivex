import React from 'react';

export default function Logo() {
  return (
    <div className="flex items-center gap-2 group cursor-pointer">
      {/* Icon Part */}
      <div className="relative flex items-center justify-center w-10 h-10">
        {/* Abstract "O" with a tech gap */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full transform group-hover:rotate-90 transition-transform duration-500"
        >
          <defs>
            <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#a855f7" /> 
            </linearGradient>
          </defs>
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="url(#logo-gradient)"
            strokeWidth="12"
            fill="transparent"
            strokeDasharray="180 60"
            strokeLinecap="round"
          />
          <circle
            cx="50"
            cy="50"
            r="15"
            fill="#CCFF00" 
            className="animate-pulse"
          />
        </svg>
      </div>

      {/* Text Part */}
      <span className="text-2xl font-bold tracking-tight text-[#131B33]">
        Ori<span className="text-[#6366f1]">vex</span>
      </span>
    </div>
  );
}