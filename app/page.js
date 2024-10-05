// pages/start.js
import Link from 'next/link';
import React from 'react';

export default function StartPage() {
    return (
        <div className='h-screen w-screen flex flex-col items-center text-center pt-60' style={{ backgroundImage: `url(/main.jpg)`, backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}>
            <h1 className='text-5xl mb-10 double-shadow'>Welcome to the world of Exoplanets!</h1>
            <Link href="/page1">
            <button
                className="rounded-full text-3xl px-10 py-4 bg-gray-600/30 border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent"
            >
                Let's Go!
            </button>
            </Link>
        </div>
    );
}
