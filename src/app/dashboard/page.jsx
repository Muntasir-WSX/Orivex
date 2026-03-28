"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

export default function AdminDashboard() {
    const [stats, setStats] = useState({
        totalOrders: 0,
        totalCourses: 0,
        totalTemplates: 0,
        totalUsers: 0
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRealStats = async () => {
            try {
                // আপনার ক্রিয়েট করা stats API কল করা হচ্ছে
                const res = await fetch('/api/admin/stats');
                const data = await res.json();
                
                if (data.success) {
                    setStats(data.stats);
                } else {
                    throw new Error(data.error);
                }
            } catch (error) {
                toast.error("ডাটা লোড করতে সমস্যা হয়েছে!");
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchRealStats();
    }, []);

    const statCards = [
        { label: 'Total Orders', value: stats.totalOrders, icon: '🛒', color: 'bg-blue-50' },
        { label: 'Live Courses', value: stats.totalCourses, icon: '🎓', color: 'bg-green-50' },
        { label: 'Templates', value: stats.totalTemplates, icon: '📄', color: 'bg-purple-50' },
        { label: 'Active Users', value: stats.totalUsers, icon: '👥', color: 'bg-orange-50' },
    ];

    // Skeleton Loader for Modern Look
    if (loading) return (
        <div className="p-8 grid grid-cols-1 md:grid-cols-4 gap-6 animate-pulse">
            {[1, 2, 3, 4].map(i => (
                <div key={i} className="h-44 bg-gray-100 rounded-[2.5rem]"></div>
            ))}
            <div className="col-span-full h-96 bg-gray-50 rounded-[3rem] mt-4"></div>
        </div>
    );

    return (
        <div className="p-4 md:p-8 bg-[#F8F9FA] min-h-screen">
            {/* --- Header Section --- */}
            <div className="mb-10 flex justify-between items-end">
                <div>
                    <h1 className="text-4xl font-black tracking-tighter text-[#131B33] uppercase">
                        Admin <span className="text-transparent" style={{ WebkitTextStroke: '1px #131B33' }}>Console</span>
                    </h1>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] mt-2">
                        System Status: <span className="text-green-500">Online</span>
                    </p>
                </div>
            </div>

            {/* --- Stats Grid (Dynamic) --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {statCards.map((stat, index) => (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        key={index} 
                        className={`p-8 rounded-[2.5rem] border border-gray-100 shadow-sm ${stat.color} hover:shadow-md transition-all`}
                    >
                        <div className="text-3xl mb-4">{stat.icon}</div>
                        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">{stat.label}</h3>
                        <p className="text-4xl font-black text-[#131B33] mt-2 tracking-tighter">{stat.value}</p>
                    </motion.div>
                ))}
            </div>

            {/* --- Platform Insights Section --- */}
            <div className="bg-white rounded-[3.5rem] border border-gray-100 p-10 shadow-xl shadow-gray-200/40">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
                    <h3 className="text-xl font-black uppercase tracking-tight">Real-time Insights</h3>
                    <div className="flex gap-3">
                        <button className="text-[9px] font-black uppercase tracking-widest text-white bg-[#131B33] px-6 py-3 rounded-2xl shadow-lg active:scale-95 transition-transform">
                            Export Data
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Inventory Breakdown */}
                    <div className="lg:col-span-7 space-y-8">
                        <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Operational Distribution</h4>
                        <div className="grid grid-cols-1 gap-4">
                            {[
                                { name: 'MERN Stack Courses', count: stats.totalCourses, theme: 'bg-blue-600' },
                                { name: 'Premium Templates', count: stats.totalTemplates, theme: 'bg-[#CCFF00]' },
                                { name: 'Registered Users', count: stats.totalUsers, theme: 'bg-[#131B33]' }
                            ].map((item, i) => (
                                <div key={i} className="group flex items-center justify-between p-6 bg-gray-50 rounded-[2rem] border border-transparent hover:border-gray-200 transition-all cursor-default">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-2 h-2 rounded-full ${item.theme}`}></div>
                                        <span className="font-bold text-sm text-gray-700 uppercase tracking-tight">{item.name}</span>
                                    </div>
                                    <span className="font-black text-xl text-[#131B33]">{item.count}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Performance Visualizer Card */}
                    <div className="lg:col-span-5 bg-[#131B33] rounded-[3rem] p-10 text-white relative overflow-hidden group">
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#CCFF00] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                        
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#CCFF00]">Growth Metric</h4>
                                <p className="text-6xl font-black mt-6 tracking-tighter">
                                    {((stats.totalOrders / (stats.totalUsers || 1)) * 100).toFixed(1)}%
                                </p>
                                <p className="text-gray-400 text-xs mt-4 font-bold uppercase tracking-widest leading-relaxed">
                                    Conversion <br /> Velocity
                                </p>
                            </div>
                            
                            <div className="mt-12">
                                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        animate={{ width: '65%' }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                        className="h-full bg-[#CCFF00]"
                                    ></motion.div>
                                </div>
                                <p className="text-[9px] font-black mt-4 uppercase tracking-[0.2em] text-gray-500">Cloud Sync: MongoDB Cluster</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Footer Status */}
            <div className="mt-12 text-center">
                <p className="text-[8px] font-black uppercase tracking-[0.5em] text-gray-300">
                    Orivex Administrative Interface • 2026
                </p>
            </div>
        </div>
    );
}