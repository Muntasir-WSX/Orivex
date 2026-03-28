"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function AllCoursesPage() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('/api/courses')
            .then(res => res.json())
            .then(data => setCourses(data)); 
    }, []);

    return (
        <div className="container mx-auto py-12 px-4">
            <h1 className="text-4xl font-bold mb-10 text-center text-[#00192F]">Explore Our All Courses</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map(course => (
                    <div key={course._id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col hover:shadow-xl transition-shadow duration-300">
                        {/* Course Image */}
                        <div className="relative">
                            <img src={course.image} alt={course.title} className="h-52 w-full object-cover" />
                            <span className="absolute top-4 left-4 bg-[#2ECC71] text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                                {course.category}
                            </span>
                        </div>

                        {/* Course Content */}
                        <div className="p-6 grow">
                            <h3 className="text-xl font-bold text-[#00192F] leading-snug h-14 overflow-hidden">
                                {course.title}
                            </h3>
                            
                            <div className="flex items-center justify-between mt-6">
                                <span className="text-[#E91E63] font-extrabold text-2xl">${course.price}</span>
                                <div className="flex items-center text-sm text-gray-500 gap-3">
                                    <span className="flex items-center gap-1">📚 {course.lessons} Lessons</span>
                                    <span className="flex items-center gap-1">👥 {course.students} Students</span>
                                </div>
                            </div>
                        </div>

                       
<Link href={`/courses/${course._id}`}>
    <button className="w-full bg-[#00192F] text-white py-3 font-semibold hover:bg-[#002a4d] transition-colors">
        Enroll Now
    </button>
</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}