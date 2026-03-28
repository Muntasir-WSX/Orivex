"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function TemplatesPage() {
    const [templates, setTemplates] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTemplates = async () => {
            try {
                const res = await fetch('/api/templates');
                const data = await res.json();
                setTemplates(data); 
                setLoading(false);
            } catch (error) {
                console.error("Error fetching templates:", error);
                setLoading(false);
            }
        };
        fetchTemplates();
    }, []);

    if (loading) return <div className="text-center py-20 text-[#131B33] font-bold italic">Loading Our Premium Collection...</div>;

    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <div className="container mx-auto px-6 md:px-16">
                
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#131B33] mb-6">All Premium UI Kits</h2>
                    <p className="text-gray-600 text-lg">
                        Browse our complete library of professional templates, starters, and UI kits.
                    </p>
                </div>

                {/* The Unified Card Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {templates.map((kit) => (
                        <div key={kit._id} className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                            
                            {/* Card Image Wrapper */}
                            <div className="relative h-52 w-full overflow-hidden">
                                <img 
                                    src={kit.image} 
                                    alt={kit.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 bg-[#2ECC71] text-white text-[10px] font-bold px-3 py-1.5 rounded-md uppercase">
                                    {kit.category || 'Premium'}
                                </div>
                            </div>

                            {/* Card Content Body */}
                            <div className="p-6 grow flex flex-col">
                                <h3 className="text-lg font-bold text-[#131B33] mb-4 line-clamp-2 min-h-[56px] leading-tight">
                                    {kit.title}
                                </h3>
                                
                                <div className="flex items-center justify-between mt-auto mb-6">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Price</span>
                                        <span className="text-xl font-black text-[#E91E63]">${kit.price}</span>
                                    </div>
                                    <div className="text-right">
                                        <div className="flex items-center gap-1 justify-end text-yellow-500 text-xs mb-1">
                                            <span>⭐</span>
                                            <span className="font-bold text-[#131B33]">{kit.rating || '4.9'}</span>
                                        </div>
                                        <span className="text-[10px] text-gray-500 font-bold uppercase">
                                            {kit.sales || '0'}+ Sold
                                        </span>
                                    </div>
                                </div>

                                {/* Uniform Action Button */}
                                <Link 
  href={`/templates/${kit._id}`} 
  className="block w-full bg-[#CCFF00] text-[#131B33] py-4 rounded-xl font-bold text-xs uppercase tracking-widest text-center transition-all duration-300 hover:bg-[#131B33] hover:text-white shadow-sm active:scale-95"
>
    Buy Now
</Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* If no templates found */}
                {templates.length === 0 && (
                    <div className="text-center py-20 text-gray-400">
                        No templates found at the moment.
                    </div>
                )}
            </div>
        </div>
    );
}