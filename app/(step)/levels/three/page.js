// pages/options.js
import Link from 'next/link';
import React from 'react';

export default function Choice() {
    return (
        <div className="text-center flex items-center justify-center min-h-screen bg-gray-200" style={{ backgroundImage: `url(/highschool.jpg)`, backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}>

            {/* Back Button */}

            <div className="grid grid-rows-2 grid-cols-2 gap-6">

                <div className="relative flex items-center justify-start group cursor-pointer">
                    {/* Card (with flipping effect) */}
                    <Link href="/explore">
                        <div className="relative w-40 h-40 text-white rounded-lg flex items-center justify-center text-xl transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
                            {/* Front (button content) */}
                            <div className="absolute w-full h-full bg-[#091926]/90 rounded-lg flex items-center justify-center backface-hidden transform rotate-y-0">
                                Let's Explore!
                            </div>
                            {/* Back (description content) */}
                            <div className="absolute w-full h-full bg-[#091926]/90 rounded-lg flex items-center justify-center backface-hidden transform rotate-y-180">
                                Story time
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="relative flex items-center justify-end group cursor-pointer">
                    <Link href="https://eyes.nasa.gov/apps/exo/#/">
                        <div className="relative w-40 h-40 text-white rounded-lg flex items-center justify-center text-xl transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
                            {/* Front */}
                            <div className="absolute w-full h-full bg-[#8C3F3F]/90 rounded-lg flex items-center justify-center backface-hidden transform rotate-y-0 text-center">

                                Eyes on Exoplanets!

                            </div>
                            {/* Back */}
                            <div className="absolute w-full h-full bg-[#8C3F3F]/90 rounded-lg flex items-center justify-center backface-hidden transform rotate-y-180">
                                Dive into space
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="relative flex items-center justify-start group cursor-pointer">
                    <Link href="/quiz">
                        <div className="relative w-40 h-40 text-white rounded-lg flex items-center justify-center text-xl transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
                            {/* Front */}
                            <div className="absolute w-full h-full bg-[#8C3F3F]/90 rounded-lg flex items-center justify-center backface-hidden transform rotate-y-0">
                                Quizz!
                            </div>
                            {/* Back */}
                            <div className="absolute w-full h-full bg-[#8C3F3F]/90 rounded-lg flex items-center justify-center backface-hidden transform rotate-y-180">
                                Test your knowledge
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="relative flex items-center justify-end group cursor-pointer">
                    <div className="relative w-40 h-40 text-white rounded-lg flex items-center justify-center text-xl transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
                        {/* Front */}
                        <div className="absolute w-full h-full bg-[#091926]/90 rounded-lg flex items-center justify-center backface-hidden transform rotate-y-0">
                            More Resources!
                        </div>
                        {/* Back */}
                        <div className="absolute w-full h-full bg-[#091926]/90 rounded-lg flex items-center justify-center backface-hidden transform rotate-y-180">
                            Expand your horizons
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
}
