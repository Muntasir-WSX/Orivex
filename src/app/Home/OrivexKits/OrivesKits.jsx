"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function OrivesKits() {
    const [templates, setTemplates] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTemplates = async () => {
            try {
                const res = await fetch('/api/templates');
                const data = await res.json();
                setTemplates(data.slice(0, 4)); 
                setLoading(false);
            } catch (error) {
                console.error("Error fetching templates:", error);
                setLoading(false);
            }
        };
        fetchTemplates();
    }, []);

    if (loading) return <div className="text-center py-20 text-[#131B33] font-bold italic">Loading Premium Kits...</div>;

    return (
        <section className="py-24 bg-[#E6E9FF]"> 
            <div className="container mx-auto px-6 md:px-16">
                
                {/* Header - Courses Style */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-[#131B33]">Premium UI Kits</h2>
                    <p className="text-center text-gray-600 max-w-2xl mx-auto">
                        High-quality, production-ready MERN and Next.js templates to kickstart your next big project in minutes.
                    </p>
                </div>

                {/* Grid - Courses Style */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {templates.map((kit) => (
                        <div key={kit._id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col transition-all duration-300 hover:shadow-xl">
                            
                            {/* Card Image */}
                            <img 
                                src={kit.image} 
                                alt={kit.title} 
                                className="h-48 w-full object-cover" 
                            />

                            {/* Card Body */}
                            <div className="p-5 grow">
                                <span className="bg-[#2ECC71] text-white text-xs px-2 py-1 rounded">
                                    {kit.category || 'MERN Stack'}
                                </span>
                                
                                <h3 className="text-lg font-bold mt-3 text-[#131B33] line-clamp-2">
                                    {kit.title}
                                </h3>

                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-[#E91E63] font-bold text-xl">${kit.price}</span>
                                    
                                    <div className="flex items-center text-sm text-gray-500 gap-2 font-medium">
                                        <span>⭐ {kit.rating || '4.9'}</span>
                                        <span>👥 {kit.sales || '85'} Sales</span>
                                    </div>
                                </div>
                            </div>

                            {/* Buy Now Button - Exactly like Courses style */}
                            <div className="p-5 pt-0">
                                <Link 
  href={`/templates/${kit._id}`} 
  className="  bg-[#CCFF00] text-[#131B33] font-bold py-3 rounded-xl hover:bg-[#d9ff33] transition-all duration-300 px-8 w-full"
>
    Buy Now
</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}