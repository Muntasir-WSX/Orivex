"use client";
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function CartPage() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
   
    const userEmail = "muntasir@example.com"; 

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await fetch(`/api/cart?email=${userEmail}`);
                const result = await res.json();
                if (result.success) {
                    setOrders(result.data);
                }
            } catch (error) {
                toast.error("Failed to load your orders");
            } finally {
                setLoading(false);
            }
        };
        fetchOrders();
    }, [userEmail]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[60vh] text-xs font-black tracking-[0.3em] animate-pulse">
                ORIVEX LOADING...
            </div>
        );
    }

    return (
        <main className="bg-white min-h-screen py-16 px-4 md:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12 border-b border-gray-100 pb-8">
                    <h1 className="text-4xl font-black text-[#131B33] tracking-tighter uppercase">My Library</h1>
                    <p className="text-gray-400 font-bold text-[10px] tracking-[0.2em] mt-2">
                        Total {orders.length} items purchased
                    </p>
                </div>

                {orders.length === 0 ? (
                    <div className="text-center py-20 bg-gray-50 rounded-[3rem] border border-dashed border-gray-200">
                        <p className="text-gray-400 font-medium">Your cart is empty. Start learning today!</p>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {orders.map((item) => (
                            <div key={item._id} className="group relative bg-white border border-gray-100 p-6 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:shadow-gray-100 transition-all duration-500 flex flex-col md:flex-row items-center gap-8">
                                
                                

                                {/* Details */}
                                <div className="flex-1">
                                    <span className="text-[9px] font-black uppercase tracking-widest text-[#CCFF00] bg-[#131B33] px-3 py-1 rounded-full">
                                        {item.status || "Completed"}
                                    </span>
                                    <h3 className="text-xl font-black text-[#131B33] mt-3 leading-tight tracking-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 text-xs font-bold mt-2 uppercase tracking-wider">
                                        Purchase Date: {new Date(item.purchaseAt).toLocaleDateString()}
                                    </p>
                                </div>

                                {/* Price & Action */}
                                <div className="flex flex-col items-center md:items-end gap-3">
                                    <p className="text-3xl font-black text-[#131B33] tracking-tighter">${item.price}</p>
                                    <button className="bg-[#131B33] text-white text-[10px] font-black uppercase tracking-[0.2em] px-8 py-3 rounded-full hover:bg-[#CCFF00] hover:text-[#131B33] transition-all duration-300">
                                        Access Content
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}