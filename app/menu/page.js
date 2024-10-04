// pages/options.js
import React from 'react';
import Link from 'next/link';

export default function Choice() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-200">

            {/* Back Button */}
            <Link href="/start" legacyBehavior>
                <a className="absolute top-4 left-4 flex items-center bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition duration-200">
                    <span className="mr-2">&larr;</span> Back
                </a>
            </Link>

            <div className="grid grid-rows-2 grid-cols-2 gap-6">
                {/* First Row */}
                <div className="relative flex items-center justify-start group">
                    {/* Button */}
                    <Link href="" legacyBehavior>
                        <a>
                            <button className="w-40 h-40 bg-blue-500 text-white rounded-lg flex items-center justify-center text-xl transform hover:scale-110 transition duration-200">
                                Let's Explore!
                            </button>
                        </a>
                    </Link>
                    {/* Description (hidden by default) */}
                    <span className="absolute right-44 -translate-x-full text-black opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
                        Description 1
                    </span>
                </div>

                <div className="relative flex items-center justify-end group">
                    {/* Button */}
                    <Link href="https://eyes.nasa.gov/apps/exo/#/" legacyBehavior>
                        <a>
                            <button className="w-40 h-40 bg-red-500 text-white rounded-lg flex items-center justify-center text-xl transform hover:scale-110 transition duration-200">
                                Eyes on Exoplanets!
                            </button>
                        </a>
                    </Link>
                    {/* Description */}
                    <span className="absolute left-44 translate-x-full text-black opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
                        Description 2
                    </span>
                </div>

                {/* Second Row */}
                <div className="relative flex items-center justify-start group">
                    {/* Button */}
                    <Link href="" legacyBehavior>
                        <a>
                            <button className="w-40 h-40 bg-green-500 text-white rounded-lg flex items-center justify-center text-xl transform hover:scale-110 transition duration-200">
                                Quizz!
                            </button>
                        </a>
                    </Link>
                    {/* Description */}
                    <span className="absolute right-44 -translate-x-full text-black opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
                        Description 3
                    </span>
                </div>

                <div className="relative flex items-center justify-end group">
                    {/* Button */}
                    <Link href="" legacyBehavior>
                        <a>
                            <button className="w-40 h-40 bg-yellow-500 text-white rounded-lg flex items-center justify-center text-xl transform hover:scale-110 transition duration-200">
                                More ressources!
                            </button>
                        </a>
                    </Link>
                    {/* Description */}
                    <span className="absolute left-44 translate-x-full text-black opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
                        Description 4
                    </span>
                </div>

            </div>
        </div>
    );
}
