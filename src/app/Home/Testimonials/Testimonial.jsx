"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Muntasir Mahmud",
    role: "Full-stack Developer",
    img: "https://res.cloudinary.com/dnk0bvpym/image/upload/v1770902014/user13_upighw.jpg",
    review: "The Orivex Kits saved me weeks of development time. The UI components are incredibly clean and easy to customize for my MERN projects.",
    rating: 5
  },
  {
    name: "Sarah Ahmed",
    role: "UI/UX Student",
    img: "https://res.cloudinary.com/dnk0bvpym/image/upload/v1770900330/user12_ipoved.jpg",
    review: "Learning Next.js through Orivex was a game-changer. The hands-on approach helped me build my first production-ready application.",
    rating: 5
  },
  {
    name: "Tanjim Ahmed",
    role: "Frontend Engineer",
    img: "https://res.cloudinary.com/dnk0bvpym/image/upload/v1770900343/user9_vuaywr.jpg",
    review: "The templates provided here are not just beautiful but highly optimized. It's a must-have resource for every serious developer.",
    rating: 4.8
  },
  {
    name: "Nusrat Jahan",
    role: "CSE Student",
    img: "https://res.cloudinary.com/dnk0bvpym/image/upload/v1770900330/user11_gaqtuk.jpg",
    review: "Interactive mentor support and real-world projects made my learning journey smooth. Highly recommended for beginners!",
    rating: 5
  },
  {
    name: "Affnan Sawad",
    role: "Software Customer",
    img: "https://res.cloudinary.com/dnk0bvpym/image/upload/v1747153336/lawyers4_oo0sxr.jpg",
    review: "Used Orivex templates for my startup landing page. The clean code and responsive design were exactly what I was looking for.",
    rating: 5
  }
];

export default function Testimonial() {
  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="container mx-auto">
        {/* Headline & Subtitle */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h4 className="text-[#a855f7] font-bold tracking-widest uppercase text-sm mb-3">Student & Customer Voices</h4>
          <h2 className="text-4xl md:text-5xl font-black text-[#131B33] mb-6">Real Stories From Our Community</h2>
          <p className="text-[#5E5E5E] text-lg leading-relaxed">
            Join thousands of successful developers and businesses who have transformed their digital journey with Orivex.
          </p>
        </div>

        {/* Sliding Cards Container */}
        <div className="relative flex">
          <motion.div 
            className="flex gap-8"
            animate={{
              x: [0, -1920], // স্লাইড এনিমেশন
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30, // কত দ্রুত স্লাইড হবে
                ease: "linear",
              },
            }}
          >
            {/* ডাবল লুপ করা হয়েছে যাতে স্লাইডটি ইনফিনিট মনে হয় */}
            {[...testimonials, ...testimonials].map((item, index) => (
              <div 
                key={index} 
                className="min-w-[350px] md:min-w-[400px] bg-[#F8FAFF] p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-6 text-[#FFC107]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill={i < Math.floor(item.rating) ? "currentColor" : "none"} />
                  ))}
                  <span className="ml-2 text-[#131B33] font-bold">{item.rating}/5</span>
                </div>

                {/* Review Text */}
                <p className="text-[#5E5E5E] text-lg italic mb-8 leading-relaxed">
                  "{item.review}"
                </p>

                {/* Profile Section */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h5 className="text-[#131B33] font-bold text-lg leading-none mb-1">{item.name}</h5>
                    <p className="text-[#a855f7] font-semibold text-sm uppercase tracking-tighter">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}