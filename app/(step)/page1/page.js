// pages/start.js
import React from 'react';
import Link from 'next/link';

export default function StartPage() {
    return (
        <div className="bg-space bg-cover bg-no-repeat min-h-screen flex items-center justify-center" style={{ backgroundImage: `url(/menuu.jpg)`, backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}>
            <div className="flex flex-col space-y-6">
                <Link href="/levels/one" className="text-center bg-gradient-to-r from-gray-600/70 to-blue-600/70 hover:from-gray-600/80 hover:to-blue-600/80 text-white py-4 px-8 text-xl rounded-full shadow-glow hover:shadow-glow-hover transform hover:scale-110 transition-all duration-300">
                    Elementary School
                </Link>
                <Link href="/levels/two" className="text-center bg-gradient-to-r from-gray-600/70 to-blue-600/70 hover:from-gray-600/80 hover:to-blue-600/80 text-white py-4 px-8 text-xl rounded-full shadow-glow hover:shadow-glow-hover transform hover:scale-110 transition-all duration-300">
                    Middle School
                </Link>
                <Link href="/levels/three" className="text-center bg-gradient-to-r from-gray-600/70 to-blue-600/70 hover:from-gray-600/80 hover:to-blue-600/80 text-white py-4 px-8 text-xl rounded-full shadow-glow hover:shadow-glow-hover transform hover:scale-110 transition-all duration-300">
                    High School
                </Link>
            </div>
        </div>
    );
}
