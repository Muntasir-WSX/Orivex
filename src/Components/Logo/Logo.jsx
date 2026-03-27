import React from 'react';

export default function Logo() {
  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      {/* Icon Part: Minimalist Hexagon/Diamond Tech Shape */}
      <div className="relative w-9 h-9">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-sm transition-all duration-500 group-hover:scale-110"
        >
          <defs>
            <linearGradient id="icon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#4F46E5" />
            </linearGradient>
          </defs>
          
          {/* Main Background Shape - A sharp diamond with rounded corners */}
          <path
            d="M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z"
            fill="none"
            stroke="url(#icon-grad)"
            strokeWidth="8"
            strokeLinejoin="round"
          />
          
          {/* Inner "V" for Vex/Velocity */}
          <path
            d="M30 40 L50 65 L70 40"
            fill="none"
            stroke="#131B33"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:stroke-[#6366F1] transition-colors duration-300"
          />
          
          {/* Accent dot representing AI/Node/Connection */}
          <circle
            cx="50"
            cy="15"
            r="8"
            fill="#CCFF00"
            className="animate-pulse"
          />
        </svg>
      </div>

      {/* Text Part: Sophisticated & Clean */}
      <div className="flex flex-col leading-none">
        <span className="text-2xl font-black tracking-tighter text-[#131B33] flex items-baseline">
          ORIVEX
          <span className="w-1.5 h-1.5 bg-[#CCFF00] ml-0.5 rounded-full"></span>
        </span>
      </div>
    </div>
  );
}