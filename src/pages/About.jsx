import React, { useEffect } from 'react';

const About = () => {
    const About = () => {
        useEffect(() => {
            document.title = "About | GAMEKEEPER";
        }, [])
    }
    return (
        <div className="max-w-2xl mx-auto mt-16 text-center">
            <h2 className="text-3xl font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent mb-4">About GAMEKEEPER</h2>
            <p className="text-gray-600 mb-6 leading-relaxed"> 
                GAMEKEEPER is a game-based web platform where you can explore different fun challenges, learn installations, and interact with exciting game setups. This project is built with React, Tailwind CSS, Firebase for a smooth and dynamic experience.
            </p>
            <p className="text-gray-500 italic">
                — Developed by passionate gamers & web developers 💻🎮
            </p>
        </div>
    );
};

export default About;