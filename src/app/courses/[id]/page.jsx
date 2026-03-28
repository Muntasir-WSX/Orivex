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

    if (loading) return <div className="text-center py-20">Loading Details...</div>;
    if (!course) return <div className="text-center py-20">Course not found!</div>;

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                    <img src={course.image} alt={course.title} className="w-full h-100 object-cover rounded-3xl mb-8 shadow-lg" />
                    <h1 className="text-4xl font-extrabold text-[#00192F] mb-4">{course.title}</h1>
                    <div className="flex items-center gap-4 mb-6">
                        <span className="bg-[#2ECC71] text-white px-4 py-1 rounded-full font-bold">{course.category}</span>
                        <span className="text-gray-500 font-medium">Instructor: <span className="text-[#00192F] font-bold">{course.instructor}</span></span>
                    </div>
                    
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm mb-8">
                        <h2 className="text-2xl font-bold mb-4">Description</h2>
                        <p className="text-gray-600 leading-relaxed">{course.description}</p>
                    </div>

                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold mb-4">What you'll learn</h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {course.benefits?.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-2 text-gray-600">
                                    <span className="text-[#2ECC71]">✔</span> {benefit}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="lg:col-span-1">
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl sticky top-24">
                        <div className="text-3xl font-extrabold text-[#E91E63] mb-6">${course.price}</div>
                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between border-b pb-2 text-gray-600">
                                <span>Lessons</span>
                                <span className="font-bold text-[#00192F]">{course.lessons}</span>
                            </div>
                            <div className="flex justify-between border-b pb-2 text-gray-600">
                                <span>Students</span>
                                <span className="font-bold text-[#00192F]">{course.students}</span>
                            </div>
                            <div className="flex justify-between border-b pb-2 text-gray-600">
                                <span>Rating</span>
                                <span className="font-bold text-yellow-500">{"★".repeat(course.rating)}</span>
                            </div>
                        </div>
                        <button className="w-full bg-[#00192F] text-white py-4 rounded-xl font-bold hover:bg-[#E91E63] transition-all transform hover:scale-105">
                            Buy This Course
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}