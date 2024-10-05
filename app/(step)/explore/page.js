"use client"
import React, { useState } from 'react';

import Image from 'next/image'
import Link from 'next/link';

export default function Explore() {

    const [page, setPage] = useState(0);

    const [content, setContent] = useState([
        {
            title: `Exploring Exoplanets: A Journey Beyond Our Solar System`,
            paragraph: `Exoplanets are planets that orbit stars outside our solar system. They come in all shapes and sizes. Some might even have conditions similar to Earth, which makes them exciting places to explore for signs of life! Let’s embark on a thrilling journey across the vast universe for some cosmic sightseeing!`
        },
        {
            title: `The departure`,
            paragraph: `As we zoom past Neptune, the farthest planet in our solar system, we are about to take our first bold step outside of our familiar cosmic neighborhood! To cover more distance quickly, we’ll need to hop through wormholes—imagine them as shortcuts through space that bend time and distance, letting us travel far, far away in just a blink!`
        },
        {
            title: `The departure`,
            paragraph: `As we zoom past Neptune, the farthest planet in our solar system, we are about to take our first bold step outside of our familiar cosmic neighborhood! To cover more distance quickly, we’ll need to hop through wormholes—imagine them as shortcuts through space that bend time and distance, letting us travel far, far away in just a blink!`
        },
        {
            title: `First Stop: Proxima Centauri b`,
            paragraph: `Our first destination is Proxima Centauri b, located just 4 light years away from Earth. This super Earth exoplanet orbits its own star, Proxima Centauri, just like how Earth orbits the Sun. Could it be a new home for humans someday? Only time will tell!`
        },

        {
            title: `Next Stop: Tau Ceti e`,
            paragraph: `Now, we jump to Tau Ceti e, 12 light years away. Another super Earth, Tau Ceti e orbits its star and sparks curiosity with its size and potential to support life. Imagine standing on a planet that far from home!`
        },

        {
            title: `Third Stop: Wolf 1061 c`,
            paragraph: `Traveling 14 light years from Earth, we arrive at Wolf 1061 c. This super Earth exoplanet is part of a fascinating star system. Perhaps, in the future, we could find water—or even life—on this distant planet.`
        },

        {
            title: `Fourth Stop: 55 Cancri e`,
            paragraph: `Next, we zoom to 55 Cancri e, which lies 41 light years from Earth. This super Earth is unique because it’s incredibly close to its star, making its surface temperatures blisteringly hot. Could there be diamonds beneath its fiery surface? Scientists think it's possible!`
        },

        {
            title: `Fifth Stop: HD 40307 g`,
            paragraph: `Just 42 light years away, we encounter HD 40307 g, a super Earth exoplanet. This rocky world may have the right conditions for life and possibly even liquid water! It’s one of the more promising places in our search for extraterrestrial life.`
        },

        {
            title: `Sixth Stop: GJ 1214 b`,
            paragraph: `Now, 48 light years from Earth, we visit GJ 1214 b, a mini-Neptune exoplanet. This planet is much smaller than our own Neptune but still has a thick atmosphere. Scientists are curious whether it could be an ocean world, covered in water.`
        },

        {
            title: `Seventh Stop: LHS 1140 b`,
            paragraph: `Next up is LHS 1140 b, 49 light years from Earth. Another super Earth, this planet sits in the habitable zone of its star, where temperatures might allow liquid water. Could this be the next Earth? Maybe one day we’ll find out!`
        },

        {
            title: `Eighth Stop: 51 Pegasi b`,
            paragraph: `We make our way to 51 Pegasi b, 50 light years from Earth. This is one of the first exoplanets ever discovered! It’s a gas giant, a massive planet mostly made of gas, similar to Jupiter in our own solar system.`
        },

        {
            title: `Ninth Stop: HD 189733 b`,
            paragraph: `Our next stop is HD 189733 b, a gas giant 64 light years from Earth. It’s known for its fierce weather, with winds that blow at 5,400 miles per hour and rain made of glass! This is definitely not a place for a vacation.`
        },

        {
            title: `Tenth Stop: Beta Pictoris b`,
            paragraph: `Also 64 light years away is Beta Pictoris b, a gas giant that orbits a bright young star. It’s still growing, which means we’re witnessing the birth of a planet in real-time—an amazing sight in our universe.`
        },

        {
            title: `Eleventh Stop: HD 209458 b`,
            paragraph: `Next, we head to HD 209458 b, located 158 light years away. This gas giant is known for being the first exoplanet where astronomers detected an atmosphere, sparking much excitement about the potential for studying planets beyond our solar system.`
        },

        {
            title: `Twelfth Stop: Kepler-186 f`,
            paragraph: `We now travel to Kepler-186 f, 579 light years away. This terrestrial planet is the size of Earth and sits in its star’s habitable zone. If there’s life out there, Kepler-186 f is one of the best places to look!`
        },

        {
            title: `Thirteenth Stop: Kepler-22 b`,
            paragraph: `Continuing our journey, we come to Kepler-22 b, 635 light years from Earth. This super Earth has intrigued scientists because of its location in the "Goldilocks zone" where conditions may be just right for life.`
        },

        {
            title: `Fourteenth Stop: Kepler-452 b`,
            paragraph: `Now, 1,799 light years from Earth, we arrive at Kepler-452 b. This super Earth orbits a star very much like our Sun and is often called Earth’s “cousin.” Could it have forests, oceans, or even intelligent life?`
        },

        {
            title: `Fifteenth Stop: Kepler-69 c`,
            paragraph: `Farther out, at 2,383 light years away, we visit Kepler-69 c. This super Earth is larger than our planet and lies in the habitable zone of its star. Scientists believe it could have the right conditions for life to thrive.`
        },

        {
            title: `Final Stop: Kepler-1207 b`,
            paragraph: `Our farthest destination is Kepler-1207 b, a staggering 5,721 light years away from Earth. This super Earth is incredibly far from us, but it makes you wonder—what wonders could be waiting for us on a planet so far away?`
        },
    ])

    const [fade, setFade] = useState(true);

    const changePage = (newPage) => {
        setFade(false); // Start fade-out
        setTimeout(() => {
            setPage(newPage); // Change page after fade-out
            setFade(true); // Start fade-in
        }, 500); // Adjust this timing to match your fade-out duration
    };

    return (
        <div className="flex flex-col items-center text-justify pt-56 mx-auto h-screen w-screen"
             style={{ backgroundImage: `url(/image${page + 2}.png)`, backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}>
            
            <div className={`w-[80%] transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                <h1 className="text-5xl double-shadow mb-10 text-center">{content[page].title}</h1>
                <p className="text-4xl double-shadow h-40">{content[page].paragraph}</p>

                <div className='absolute bottom-0 flex justify-between text-6xl text-center w-full right-0 pb-4 px-4'>
                    <button className='double-shadow mr-10' 
                            onClick={() => changePage(Math.max(0, page - 1))}>
                        {'Go back'}
                    </button>
                    <button className='double-shadow' 
                            onClick={() => changePage(page === content.length - 1 ? page : page + 1)}>
                        {(page === content.length - 1) 
                            ? (<Link href="/levels/one">Go back to menu</Link>) 
                            : 'Next stop'}
                    </button>
                </div>
            </div>
        </div>
    );
}