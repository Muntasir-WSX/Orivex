"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function TemplateDetails() {
    const { id } = useParams();
    const [template, setTemplate] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTemplate = async () => {
            try {
                const res = await fetch(`/api/templates/${id}`);
                const data = await res.json();
                setTemplate(data);
                setLoading(false);
            } catch (error) {
                console.error("Error:", error);
                setLoading(false);
            }
        };
        if (id) fetchTemplate();
    }, [id]);

    if (loading) return <div className="text-center py-20 font-bold text-[#131B33]">Loading Details...</div>;
    if (!template) return <div className="text-center py-20 font-bold text-red-500">Template not found!</div>;

    return (
        <div className="bg-[#FDFDFF] min-h-screen">
            <div className="container mx-auto px-4 py-12 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                  
                    <div className="lg:col-span-2">
                       
                        <img 
                            src={template.image} 
                            alt={template.title} 
                            className="w-full h-auto max-h-[500px] object-cover rounded-[2.5rem] mb-10 shadow-lg border border-gray-50" 
                        />
                        
                        {/* Title & Category */}
                        <div className="space-y-4 mb-10">
                            <h1 className="text-4xl md:text-5xl font-black text-[#131B33] leading-tight">
                                {template.title}
                            </h1>
                            <div className="flex flex-wrap items-center gap-4">
                                <span className="bg-[#2ECC71] text-white px-5 py-1.5 rounded-full font-bold text-xs uppercase tracking-wide">
                                    {template.category}
                                </span>
                                <span className="text-gray-400 font-medium text-sm">
                                    Instructor: <span className="text-[#8E79F0] font-bold border-b border-[#8E79F0]/30">{template.instructor}</span>
                                </span>
                            </div>
                        </div>
                        
                        {/* Description Box - Image 8c203d card style */}
                        <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm mb-10">
                            <h2 className="text-2xl font-black mb-6 text-[#131B33] flex items-center gap-3">
                                <span className="w-2 h-8 bg-[#CCFF00] rounded-full"></span>
                                Description
                            </h2>
                            <p className="text-gray-600 leading-[1.8] text-lg">
                                {template.description}
                            </p>
                        </div>

                        {/* Benefits/What you'll get */}
                        <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
                            <h2 className="text-2xl font-black mb-6 text-[#131B33]">Main Benefits</h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {template.benefits?.map((benefit, index) => (
                                    <li key={index} className="flex items-start gap-3 text-gray-600 font-semibold bg-[#F9FAFB] p-4 rounded-2xl border border-gray-50">
                                        <span className="text-[#2ECC71] font-bold text-lg">✔</span> {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

<div className="lg:col-span-1">
    <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] sticky top-24">
        
        {/* Price Section - Specific image_8c2159 styling */}
        <div className="flex items-start font-black text-[#131B33] mb-12">
            <span className="text-2xl mt-1.5">$</span>
            <span className="text-6xl tracking-tighter">{template.price}</span>
        </div>

        {/* Info List - Cleaner Typography */}
        <div className="space-y-6 mb-12">
            <div className="flex justify-between items-center border-b border-gray-50 pb-4">
                <span className="font-extrabold text-[13px] text-[#6B7280] uppercase tracking-widest">Features</span>
                <span className="font-black text-lg text-[#131B33]">{template.features?.length || 0} items</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-50 pb-4">
                <span className="font-extrabold text-[13px] text-[#6B7280] uppercase tracking-widest">Sales</span>
                <span className="font-black text-lg text-[#131B33]">{template.sales}+</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-50 pb-4">
                <span className="font-extrabold text-[13px] text-[#6B7280] uppercase tracking-widest">Rating</span>
                <span className="font-black text-lg text-gray-400 flex gap-0.5">
                    {/* Render stars based on rating */}
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < Math.round(template.rating || 5) ? "text-[#131B33]" : "text-gray-200"}>
                            ★
                        </span>
                    ))}
                </span>
            </div>
        </div>

        {/* Action Buttons - Fixed padding and shadow */}
        <div className="space-y-4">
            <button className="w-full bg-[#CCFF00] text-[#131B33] font-black py-4 rounded-full hover:shadow-xl hover:scale-[1.02] transition-all duration-300 text-sm uppercase tracking-[0.15em]">
                Buy This Template
            </button>

        </div>
    </div>
</div>

                </div>
            </div>
        </div>
    );
}