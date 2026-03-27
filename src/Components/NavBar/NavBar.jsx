"use client";

import React from 'react';
import Link from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react";
import { ShoppingCart, LayoutDashboard, ChevronDown, LogOut } from 'lucide-react';
import Logo from '../Logo/Logo';

const NavBar = () => {
    const { data: session, status } = useSession();
    const isAdmin = false; 

    return (
        <nav className="bg-[#E6E9FF] px-6 py-4 flex items-center justify-between sticky top-0 z-50">
            {/* 1. Logo Section */}
            <Link href="/">
                <Logo />
            </Link>

            {/* 2. Routes Section */}
            <div className="hidden md:flex items-center gap-8">
                <Link href="/" className="text-[#6366f1] font-semibold hover:opacity-80 transition-all">
                    Home
                </Link>
                
                <div className="group relative flex items-center gap-1 text-[#131B33] font-medium hover:text-[#6366f1] cursor-pointer transition-all">
                    <Link href="/courses">Courses</Link>
                    <ChevronDown size={16} className="text-[#6366f1]" />
                </div>

                <Link href="/templates" className="text-[#131B33] font-medium hover:text-[#6366f1] transition-all">
                    Templates
                </Link>

                {/* 3. Cart Route - Conditional (শুধুমাত্র লগইন থাকলে দেখাবে) */}
                {status === "authenticated" && (
                    <Link href="/cart" className="relative group">
                        <div className="flex items-center gap-2 text-[#131B33] font-medium hover:text-[#6366f1] transition-all">
                            <ShoppingCart size={20} />
                            <span>Cart</span>
                            <span className="absolute -top-2 -right-3 bg-[#CCFF00] text-[#131B33] text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-[#131B33]">
                                0
                            </span>
                        </div>
                    </Link>
                )}

                {/* 4. Admin Dashboard (Conditional) */}
                {/* {isAdmin && (
                    <Link href="/admin" className="flex items-center gap-1 text-[#131B33] font-medium hover:text-[#6366f1] transition-all border-l pl-4 border-gray-300">
                        <LayoutDashboard size={18} />
                        <span>Admin</span>
                    </Link>
                )} */}
            </div>

            {/* 5. Right Action Section */}
            <div className="flex items-center gap-4">
                {status === "authenticated" ? (
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 bg-white/50 p-1 pr-3 rounded-full border border-indigo-100">
                            <img 
                                src={session.user?.image || "https://via.placeholder.com/150"} 
                                alt="User" 
                                className="w-8 h-8 rounded-full border border-indigo-200"
                            />
                            <span className="text-sm font-semibold text-[#131B33]">{session.user?.name?.split(' ')[0]}</span>
                        </div>
                        <button 
                            onClick={() => signOut()}
                            className="p-2 text-gray-500 hover:text-red-500 transition-colors"
                            title="Sign Out"
                        >
                            <LogOut size={20} />
                        </button>
                    </div>
                ) : (
                  
                    <button 
                        onClick={() => signIn("google")}
                        className="bg-[#131B33] text-white px-8 py-2.5 rounded-xl font-medium hover:bg-[#d9ff33] hover:text-black transition-all duration-300"
                    >
                        Sign In
                    </button>
                )}
            </div>
        </nav>
    );
};

export default NavBar;