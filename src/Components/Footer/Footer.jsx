import React from 'react';
import Link from 'next/link';
import Logo from '../Logo/Logo';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';

const Footer = () => {
    return (
        <footer className="bg-[#131B33] text-white pt-16 pb-8 px-6 md:px-16">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <div className="brightness-0 invert opacity-90">
                            <Logo />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Empowering future engineers with hands-on coding experience, AI-driven workflows, and production-ready templates. Build the future with Orivex.
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                            <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center rounded-full hover:bg-[#6366f1] hover:border-[#6366f1] transition-all duration-300">
                                <FaFacebookF size={16} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center rounded-full hover:bg-[#6366f1] hover:border-[#6366f1] transition-all duration-300">
                                <FaTwitter size={16} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center rounded-full hover:bg-[#6366f1] hover:border-[#6366f1] transition-all duration-300">
                                <FaLinkedinIn size={16} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center rounded-full hover:bg-[#6366f1] hover:border-[#6366f1] transition-all duration-300">
                                <FaInstagram size={16} />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-6 border-l-4 border-[#CCFF00] pl-3">Explore</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><Link href="/" className="hover:text-[#CCFF00] transition-colors">Home</Link></li>
                            <li><Link href="/courses" className="hover:text-[#CCFF00] transition-colors">All Courses</Link></li>
                            <li><Link href="/templates" className="hover:text-[#CCFF00] transition-colors">Premium Templates</Link></li>
                            <li><Link href="/mentorship" className="hover:text-[#CCFF00] transition-colors">Mentorship</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-6 border-l-4 border-[#CCFF00] pl-3">Support</h4>
                        <ul className="space-y-4 text-gray-400 text-sm mb-6">
                            <li><Link href="#" className="hover:text-[#CCFF00] transition-colors">Help Center</Link></li>
                            <li><Link href="#" className="hover:text-[#CCFF00] transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-[#CCFF00] transition-colors">Terms of Service</Link></li>
                        </ul>
                        <div className="space-y-3 pt-2">
                            <div className="flex items-center gap-3 text-gray-400 text-xs">
                                <HiOutlineMail size={18} className="text-[#CCFF00]" />
                                <span>support@orivex.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400 text-xs">
                                <HiOutlinePhone size={18} className="text-[#CCFF00]" />
                                <span>+880 1234 567890</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-6 border-l-4 border-[#CCFF00] pl-3">Stay Updated</h4>
                        <p className="text-gray-400 text-sm mb-4">Join our newsletter to get the latest tech updates.</p>
                        <div className="flex flex-col gap-3">
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#CCFF00] focus:bg-white/10 transition-all"
                            />
                            <button className="bg-[#CCFF00] text-[#131B33] font-bold py-3 rounded-xl hover:bg-[#d9ff33] transition-all duration-300">
                                Subscribe Now
                            </button>
                        </div>
                    </div>
                </div>
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-[10px] tracking-widest uppercase">
                    <p>© {new Date().getFullYear()} ORIVEX. ALL RIGHTS RESERVED.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-white transition-colors">Terms</Link>
                        <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;