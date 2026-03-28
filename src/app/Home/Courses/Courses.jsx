"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Courses() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('/api/courses')
            .then(res => res.json())
            .then(data => setCourses(data.slice(0, 3))); 
    }, []);

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-[#00192F]">Popular Courses</h2>
                <p className="text-center text-gray-600 mb-8">Discover our most popular courses and start your learning journey today.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {courses.map(course => (
                        <div key={course._id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col">
                            <img src={course.image} alt={course.title} className="h-48 w-full object-cover" />
                            <div className="p-5 grow">
                                <span className="bg-[#2ECC71] text-white text-xs px-2 py-1 rounded">{course.category}</span>
                                <h3 className="text-lg font-bold mt-3 text-[#00192F]">{course.title}</h3>
                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-[#E91E63] font-bold text-xl">${course.price}</span>
                                    <div className="flex items-center text-sm text-gray-500 gap-2">
                                        <span>📚 {course.lessons} Lessons</span>
                                        <span>👥 {course.students} Students</span>
                                    </div>
                                </div>
                            </div>
                            <Link href={`/courses/${course._id}`}>
    <button className="bg-[#CCFF00] text-[#131B33] font-bold py-3 rounded-xl hover:bg-[#d9ff33] transition-all duration-300 px-8 w-full">
        Enroll Now
    </button>
</Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}