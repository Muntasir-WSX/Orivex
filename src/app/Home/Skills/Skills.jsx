"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Cpu,Layout,Database,Terminal } from 'lucide-react';

const skillsData = [
  {
    title: "Next.js Mastery",
    subtitle: "App Router & SSR",
    icon: <Code2 className="text-[#6366f1]" size={28} />,
  },
  {
    title: "MERN Stack",
    subtitle: "Full-stack Excellence",
    icon: <Database className="text-[#6366f1]" size={28} />,
  },
  {
    title: "UI/UX Design",
    subtitle: "Pixel Perfect UIs",
    icon: <Layout className="text-[#6366f1]" size={28} />,
  },
  {
    title: "Clean Architecture",
    subtitle: "Scalable Codebase",
    icon: <Terminal className="text-[#6366f1]" size={28} />,
  },
  {
    title: "API Development",
    subtitle: "RESTful & Secure",
    icon: <Cpu className="text-[#6366f1]" size={28} />,
  },
  {
    title: "Global Standards",
    subtitle: "Modern Best Practices",
    icon: <Globe className="text-[#6366f1]" size={28} />,
  }
];

export default function Skills() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h4 className="text-[#6366f1] font-bold tracking-widest uppercase text-sm mb-3">
            Core Expertise
          </h4>
          <h2 className="text-4xl md:text-5xl font-black text-[#131B33]">
            My Top Professional Skills
          </h2>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {skillsData.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon Container */}
              <div className="bg-[#E6E9FF] p-5 rounded-2xl mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#6366f1]/10">
                {skill.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-black text-[#131B33] mb-2 tracking-tight">
                {skill.title}
              </h3>
              <p className="text-[#5E5E5E] text-lg font-medium">
                {skill.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}