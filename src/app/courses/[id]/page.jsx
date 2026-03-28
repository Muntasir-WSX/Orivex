"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function CourseDetails() {
    const { id } = useParams();
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const res = await fetch(`/api/courses`);
                const data = await res.json();
                const singleCourse = data.find(c => c._id === id);
                setCourse(singleCourse);
                setLoading(false);
            } catch (error) {
                console.error("Error:", error);
                setLoading(false);
            }
        };
        if (id) fetchCourse();
    }, [id]);

    if (loading) return <div className="text-center py-20 font-bold text-[#131B33]">Loading Details...</div>;
    if (!course) return <div className="text-center py-20 font-bold text-red-500">Course not found!</div>;

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Left Side: Course Information */}
                <div className="lg:col-span-2">
                    <img src={course.image} alt={course.title} className="w-full h-[450px] object-cover rounded-3xl mb-8 shadow-md" />
                    
                    <h1 className="text-4xl font-extrabold text-[#131B33] mb-4">{course.title}</h1>
                    
                    <div className="flex items-center gap-4 mb-8">
                        <span className="bg-[#2ECC71] text-white px-4 py-1 rounded-full font-bold text-sm uppercase">
                            {course.category}
                        </span>
                        <span className="text-gray-500 font-medium">
                            Instructor: <span className="text-[#131B33] font-bold">{course.instructor}</span>
                        </span>
                    </div>
                    
                    {/* Description Box */}
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm mb-8">
                        <h2 className="text-2xl font-bold mb-4 text-[#131B33]">Description</h2>
                        <p className="text-gray-600 leading-relaxed">{course.description}</p>
                    </div>

                    {/* Benefits Box */}
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold mb-4 text-[#131B33]">What you'll learn</h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {course.benefits?.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-2 text-gray-600">
                                    <span className="text-[#2ECC71] font-bold">✔</span> {benefit}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Right Side: Sidebar Price Card */}
                <div className="lg:col-span-1">
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl sticky top-24">
                        {/* Price - No Transition as requested */}
                        <div className="text-4xl font-black text-[#131B33] mb-6">
                            ${course.price}
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between border-b border-gray-50 pb-3 text-gray-600">
                                <span>Lessons</span>
                                <span className="font-bold text-[#131B33]">{course.lessons}</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-50 pb-3 text-gray-600">
                                <span>Students</span>
                                <span className="font-bold text-[#131B33]">{course.students}</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-50 pb-3 text-gray-600">
                                <span>Rating</span>
                                <span className="font-bold text-yellow-500">
                                    {"★".repeat(course.rating)}
                                </span>
                            </div>
                        </div>

                        {/* Buy Now Button with Requested Styles */}
                        <button className="bg-[#CCFF00] text-[#131B33] font-bold py-4 rounded-xl hover:bg-[#d9ff33] transition-all duration-300 px-8 w-full text-lg shadow-sm">
                            Buy This Course
                        </button>

                        <p className="text-center text-xs text-gray-400 mt-4">
                            Full lifetime access • Money-back guarantee
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}