"use client"; // Framer Motion এবং ইন্টারঅ্যাক্টিভিটির জন্য

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'; // Framer Motion ইম্পোর্ট
import { Target, Users, Zap } from 'lucide-react'; // নিশ্চিত করুন lucide-react ইনস্টল আছে

export default function About() {
  // ১. Framer Motion এনিমেশন কনফিগারেশন (Fade In and Slide Up)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // চিলড্রেন এলিমেন্টগুলো একটার পর একটা আসবে
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // ২. হাইলাইট কার্ডের ডেটা
  const highlightCards = [
    {
      icon: <Target className="text-white" size={24} />,
      title: "Our Mission",
      description: "To empower developers with production-ready UI kits and elite-level engineering education.",
      bgColor: "bg-[#a855f7]", // বেগুনি হাইলাইট
    },
    {
      icon: <Users className="text-white" size={24} />,
      title: "Our Community",
      description: "Join thousands of MERN and Next.js developers building the future of web applications.",
      bgColor: "bg-[#6366F1]", // নীলচে বেগুনি
    },
    {
      icon: <Zap className="text-white" size={24} />,
      title: "Our Impact",
      description: "From saving weeks of development time to launching startups, we measure success by your results.",
      bgColor: "bg-[#22C55E]", // সবুজ হাইলাইট
    }
  ];

  return (
    <section className="bg-[#131B33] py-24 px-6 md:px-16 relative overflow-hidden text-white">
      {/* ৩. ব্যাকগ্রাউন্ড গ্লো ইফেক্ট (Gradient Orb) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#a855f7] rounded-full blur-[150px] opacity-20 z-0" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#6366F1] rounded-full blur-[120px] opacity-15 z-0" />

      <motion.div 
        className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center z-10 relative"
        initial="hidden"
        whileInView="visible" // সেকশনটি স্ক্রিনে আসলে এনিমেশন শুরু হবে
        viewport={{ once: true, amount: 0.3 }} // একবার এনিমেশন হবে, সেকশনের ৩০% স্ক্রিনে আসলে
        variants={containerVariants}
      >
        
        {/* ৪. Left Image Section (The "Out of Box" Design) */}
        <motion.div className="lg:col-span-5 h-full relative" variants={itemVariants}>
          <div className="relative w-full max-w-[500px] mx-auto lg:max-w-none">
            {/* ব্যাকগ্রাউন্ড সার্কেল - বেগুনি এবং ওভাল শেপ */}
            <div className="absolute inset-0 bg-[#454e8c] rounded-full shadow-[0_40px_100px_-20px_rgba(69,78,140,0.5)] z-0" />

            {/* ট্রেইনার ইমেজ - ক্লিন পপ-আউট ইফেক্ট */}
            <div className="relative z-10 w-full h-full flex justify-center -mt-16 -mb-10 scale-125 md:scale-135 lg:scale-125 xl:scale-135 transition-transform duration-500">
              <Image 
                src="https://res.cloudinary.com/dnk0bvpym/image/upload/v1774641119/orvixH-removebg-preview_zscem9.png"
                alt="Orivex Founder"
                width={700}
                height={800}
                priority
                className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] h-auto"
              />
            </div>
          </div>
        </motion.div>

        {/* ৫. Right Content Section */}
        <motion.div className="lg:col-span-7" variants={containerVariants}>
          {/* Small Badge */}
          <motion.div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full shadow-sm mb-6 border border-white/20" variants={itemVariants}>
            <div className="bg-[#a855f7] p-1.5 rounded-md">
              <Zap size={14} className="text-white" />
            </div>
            <span className="text-sm font-bold text-white tracking-wide uppercase">
              Discover Orivex
            </span>
          </motion.div>

          {/* Main Title - বেগুনি হাইলাইট সহ */}
          <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-8 tracking-tight" variants={itemVariants}>
            Beyond Just <br /> 
            <span className="text-[#a855f7]">UI Kits & Courses</span>
          </motion.h2>

          {/* About Description */}
          <motion.p className="text-[#A1A1A1] text-lg md:text-xl max-w-2xl mb-12 leading-relaxed font-medium" variants={itemVariants}>
            Orivex is more than a platform—it's your ultimate engineering accelerator. We blend elite-level instruction with production-ready UI kits to help you ship faster, learn deeper, and build incredible web applications.
          </motion.p>

          {/* ৬. Highlight Cards (The Flex Layout) */}
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" variants={containerVariants}>
            {highlightCards.map((card, index) => (
              <motion.div 
                key={index} 
                className="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-lg hover:border-[#a855f7]/50 hover:bg-white/10 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }} // হোভার করলে কার্ডটি উপরে উঠবে
              >
                <div className={`${card.bgColor} p-3 rounded-xl inline-flex mb-5 shadow-lg`}>
                  {card.icon}
                </div>
                <h4 className="text-[#131B33] font-extrabold text-xl mb-3 tracking-tight">{card.title}</h4>
                <p className="text-[#A1A1A1] text-sm leading-relaxed font-semibold pr-2">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  );
}