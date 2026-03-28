"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession, signIn, signOut } from "next-auth/react";
import { ShoppingCart, Menu, X, LogOut, LayoutDashboard } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../Logo/Logo';

const NavBar = () => {
    const { data: session, status } = useSession();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => setIsOpen(!isOpen);

    const isAdmin = session?.user?.role === "admin";

    const navLinks = [
        { name: "Courses", href: "/courses" },
        { name: "Templates", href: "/templates" },
    ];

    const isActive = (path) => pathname === path;

    return (
        <nav className="bg-[#E6E9FF] px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-sm">
            <Link href="/" className="z-60">
                <Logo />
            </Link>
            
            <div className="hidden lg:flex items-center gap-8">
                <Link 
                    href="/" 
                    className={`font-semibold transition-all ${isActive('/') ? 'text-[#6366f1]' : 'text-[#131B33] hover:text-[#6366f1]'}`}
                >
                    Home
                </Link>         
                
                {navLinks.map((link) => (
                    <Link 
                        key={link.href} 
                        href={link.href} 
                        className={`font-medium transition-all ${isActive(link.href) ? 'text-[#6366f1]' : 'text-[#131B33] hover:text-[#6366f1]'}`}
                    >
                        {link.name}
                    </Link>
                ))}
                {isAdmin && (
                    <Link 
                        href="/dashboard" 
                        className={`flex items-center gap-1 font-medium transition-all ${isActive('/dashboard') ? 'text-[#6366f1]' : 'text-[#131B33] hover:text-[#6366f1]'}`}
                    >
                        <LayoutDashboard size={18} />
                        Dashboard
                    </Link>
                )}

                {status === "authenticated" && (
                    <Link 
                        href="/cart" 
                        className={`relative group flex items-center gap-2 font-medium transition-all ${isActive('/cart') ? 'text-[#6366f1]' : 'text-[#131B33] hover:text-[#6366f1]'}`}
                    >
                        <ShoppingCart size={20} />
                        <span>Cart</span>
                        <span className="absolute -top-2 -right-3 bg-[#CCFF00] text-[#131B33] text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-[#131B33]">
                            0
                        </span>
                    </Link>
                )}
            </div>

            <div className="flex items-center gap-4">
                <div className="hidden lg:flex items-center gap-3">
                    {status === "authenticated" ? (
                        <>
                            <div className="flex items-center gap-2 bg-white/50 p-1 pr-3 rounded-full border border-indigo-100">
                                <img 
                                    src={session.user?.image || "https://via.placeholder.com/150"} 
                                    alt="User" 
                                    className="w-8 h-8 rounded-full border border-indigo-200"
                                />
                                <span className="text-sm font-semibold text-[#131B33]">{session.user?.name?.split(' ')[0]}</span>
                            </div>
                            <button onClick={() => signOut()} className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                                <LogOut size={20} />
                            </button>
                        </>
                    ) : (
                        <button onClick={() => signIn("google")} className="bg-[#131B33] text-white px-8 py-2.5 rounded-xl font-medium hover:bg-[#CCFF00] hover:text-[#131B33] transition-all duration-300">
                            Sign In
                        </button>
                    )}
                </div>
                <button onClick={toggleDrawer} className="lg:hidden p-2 text-[#131B33] z-60">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={toggleDrawer} className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 lg:hidden" />
                        <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: "spring", damping: 25, stiffness: 200 }} className="fixed top-0 right-0 h-full w-70 bg-[#F8FAFF] shadow-2xl z-55 p-8 pt-24 lg:hidden">
                            <div className="flex flex-col gap-6">
                                {status === "authenticated" && (
                                    <div className="flex items-center gap-3 mb-4 p-3 bg-white rounded-2xl shadow-sm">
                                        <img src={session.user?.image} className="w-12 h-12 rounded-full border-2 border-[#a855f7]" />
                                        <div>
                                            <p className="text-[#131B33] font-bold leading-none">{session.user?.name}</p>
                                            <p className="text-xs text-gray-500 mt-1">{isAdmin ? "Admin Account" : "Active Account"}</p>
                                        </div>
                                    </div>
                                )}

                                <Link href="/" onClick={toggleDrawer} className={`text-lg font-bold ${isActive('/') ? 'text-[#6366f1]' : 'text-[#131B33]'}`}>Home</Link>

                                {navLinks.map((link) => (
                                    <Link key={link.href} href={link.href} onClick={toggleDrawer} className={`text-lg font-semibold ${isActive(link.href) ? 'text-[#6366f1]' : 'text-[#131B33]'}`}>{link.name}</Link>
                                ))}

                                {isAdmin && (
                                    <Link 
                                        href="/dashboard" 
                                        onClick={toggleDrawer} 
                                        className={`text-lg font-semibold flex items-center gap-2 ${isActive('/dashboard') ? 'text-[#6366f1]' : 'text-[#131B33]'}`}
                                    >
                                        <LayoutDashboard size={20} /> Dashboard
                                    </Link>
                                )}

                                {status === "authenticated" && (
                                    <Link href="/cart" onClick={toggleDrawer} className={`flex justify-between items-center text-lg font-semibold ${isActive('/cart') ? 'text-[#6366f1]' : 'text-[#131B33]'}`}>
                                        Cart <span className="bg-[#CCFF00] px-2 py-0.5 rounded-full text-xs">0</span>
                                    </Link>
                                )}

                                <div className="mt-8 border-t pt-8">
                                    {status === "authenticated" ? (
                                        <button onClick={() => signOut()} className="w-full flex items-center justify-center gap-2 bg-red-50 text-red-600 p-4 rounded-xl font-bold">
                                            <LogOut size={20} /> Sign Out
                                        </button>
                                    ) : (
                                        <button onClick={() => signIn("google")} className="w-full bg-[#131B33] text-white p-4 rounded-xl font-bold">Sign In</button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default NavBar;