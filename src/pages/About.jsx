import React, { useEffect } from 'react';


    const About = () => {
        useEffect(() => {
            document.title = "About | GAMEKEEPER";
        }, []);
    
    return (
        <div className="max-w-2xl mx-auto mt-16 text-center">
            <h2 className="text-3xl font-semibold  mb-14 underline italic">About GAMEKEEPER</h2>
            <p className="text-gray-900 mb-6 leading-relaxed"> 
                GAMEKEEPER is a game-based web platform where you can explore different fun challenges, learn installations, and interact with exciting game setups. This project is built with React, Tailwind CSS, Firebase for a smooth and dynamic experience.
            </p>
            <p className="text-gray-800 italic">
                — Developed by passionate gamers & web developers 💻🎮
            </p>
        </div>
    );
};

export default About;