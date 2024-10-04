// pages/start.js
import React from 'react';

export default function StartPage() {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Welcome to the world of Exoplanets!</h1>
            <a
                className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Let's Go!
            </a>
        </div>
    );
}

const styles = {
    container: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    title: {
        fontSize: '3rem',
        marginBottom: '20px',
    },
    button: {
        padding: '10px 20px',
        fontSize: '1.5rem',
        cursor: 'pointer',
        backgroundColor: '#0070f3',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
    }
};
