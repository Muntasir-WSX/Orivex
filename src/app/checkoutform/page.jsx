"use client";
import React, { useState, Suspense } from 'react';
import toast from 'react-hot-toast';
import { useRouter, useSearchParams } from 'next/navigation';

function CheckoutContent({ userEmail }) {
    const searchParams = useSearchParams();
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const item = {
        id: searchParams.get('id'),
        title: searchParams.get('title'),
        price: searchParams.get('price'),
        image: searchParams.get('image'),
    };

    const handleConfirmOrder = async () => {
        if (!userEmail) {
            toast.error('Please login first');
            return;
        }
        setLoading(true);
        try {
            const res = await fetch('/api/cart', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...item, userEmail }),
            });

            const data = await res.json();
            if (data.success) {
                toast.success('Order Successful');
                router.push('/dashboard/my-orders');
            } else {
                throw new Error(data.error);
            }
        } catch (error) {
            toast.error(error.message || 'Error occurred');
        } finally {
            setLoading(false);
        }
    };

    if (!item.id) return <div className="p-20 text-center text-gray-400">No product selected</div>;

    return (
        <main className="bg-white min-h-screen py-12 px-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-slate-900 mb-8">Checkout</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Product Info */}
                    <div>
                        <img src={item.image} alt="" className="w-full aspect-video object-cover rounded-lg mb-4" />
                        <h2 className="text-xl font-semibold text-slate-800">{item.title}</h2>
                        <p className="text-gray-500 mt-2">Lifetime Access • Orivex Team</p>
                    </div>

                    {/* Summary & Button */}
                    <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 h-fit">
                        <div className="flex justify-between mb-4">
                            <span className="text-gray-600">Price</span>
                            <span className="font-bold">${item.price}</span>
                        </div>
                        <div className="border-t border-slate-200 pt-4 flex justify-between items-end mb-8">
                            <span className="text-gray-600">Total</span>
                            <span className="text-3xl font-bold text-slate-900">${item.price}</span>
                        </div>

                        <div className="w-full mt-6 relative z-50"> {/* z-50 নিশ্চিত করবে এটা সবার উপরে থাকবে */}
    <button
        onClick={handleConfirmOrder}
        disabled={loading}
        className={`w-full py-5 rounded-xl font-black uppercase tracking-widest text-sm transition-all border-2
        ${loading 
            ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed' 
            : 'bg-[#131B33] text-white border-[#131B33] hover:bg-white shadow-lg'}`}
    >
        {loading ? (
            <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-gray-400" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
            </span>
        ) : (
            'Confirm Order'
        )}
    </button>
</div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default function CheckoutPage() {
    return (
        <Suspense fallback={<div className="p-20 text-center">Loading...</div>}>
            <CheckoutContent userEmail="muntasir@example.com" />
        </Suspense>
    );
}