"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  const headerTexts = [
    { title: "Master Coding", subtitle: "For Real World" },
    { title: "Build Premium", subtitle: "Templates & UIs" },
    { title: "Jumpstart Your", subtitle: "Eng. Career" }
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % headerTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const textVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    exit: { y: -20, opacity: 0, transition: { duration: 0.3 } }
  };

  return (
    <section className="bg-[#E6E9FF] min-h-[90vh] flex items-center px-6 md:px-16 py-12 relative overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-0">
        <div className="z-10 col-span-1 lg:col-span-7">
          {/* Small Badge */}
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6 border border-white/50 relative">
            <div className="bg-[#a855f7] p-1.5 rounded-md">
              <BookOpen size={14} className="text-white" />
            </div>
            <AnimatePresence mode="wait">
              <motion.span 
                key={currentTextIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-sm font-bold text-[#131B33]"
              >
                {currentTextIndex === 0 ? "Orivex - Engineering Career" : currentTextIndex === 1 ? "Orivex - Premium Templates" : "Orivex - Top Courses"}
              </motion.span>
            </AnimatePresence>
          </div>
          <div className="h-25 md:h-30 lg:h-45 relative overflow-hidden mb-6">
            <AnimatePresence mode="wait">
              <motion.h1 
                key={currentTextIndex}
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-[#131B33] leading-[1.1] lg:leading-[1.05] tracking-tight absolute top-0 left-0 w-full"
              >
                {headerTexts[currentTextIndex].title} <br /> 
                <span className="text-[#131B33]">
                  {headerTexts[currentTextIndex].subtitle}
                </span>
              </motion.h1>
            </AnimatePresence>
          </div>

          <p className="text-[#5E5E5E] text-base md:text-lg lg:text-xl max-w-xl mb-10 leading-relaxed font-medium">
            Learn modern tech stacks (Next.js, Node.js, AI) with a hands-on approach. 
            Build production-ready applications and jumpstart your career.
          </p>

          <Link href="/courses">
  <button className="bg-[#CCFF00] text-[#131B33] font-bold py-3 rounded-xl hover:bg-[#d9ff33] transition-all duration-300 px-8">
    Explore Courses
  </button>
</Link>

          <div className="mt-14 flex items-center gap-6">
            <div className="flex -space-x-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-12 h-12 md:w-14 md:h-14 rounded-full border-4 border-white shadow-md overflow-hidden bg-gray-200">
                  <img src={`https://i.pravatar.cc/150?u=${i}`} alt="student" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div>
              <p className="text-xl md:text-2xl font-black text-[#131B33]">5,000+</p>
              <p className="text-xs md:text-sm font-semibold text-[#5E5E5E] tracking-wide uppercase">Active Global Students</p>
            </div>
          </div>
        </div>

        
        <div className="relative hidden lg:flex justify-center lg:justify-end lg:col-span-5 h-full z-10 lg:pl-0">
  <div className="relative w-full max-w-112.5 p-6 lg:min-w-125 lg:-ml-28">
    <div className="absolute inset-0 bg-[#454e8c] rounded-full shadow-[0_40px_100px_-20px_rgba(69,78,140,0.5)] z-0" />
    <div className="relative z-10 w-full h-full flex justify-center -mt-16 -mb-10 scale-150">
      <Image 
        src="https://res.cloudinary.com/dnk0bvpym/image/upload/v1774641119/orvixH-removebg-preview_zscem9.png"
        alt="Orivex Trainer"
        width={700}
        height={800}
        priority
        className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] h-auto"
      />
    </div>
  </div>
</div>
      </div>
    </section>
  );
}