import React from 'react';
import { Link } from 'react-router';
import errorImg from "../assets/error-404.png"
import { FaHome } from 'react-icons/fa';

const NotFound = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen text-center'>
            <img src={errorImg} className='h-80 w-80' alt="" />
            <h1 className='text-6xl font-bold text-[#ff0080] mb-4 '>404</h1>
            <h2 className='text-2xl font-semibold text-gray-700 mb-5'>Oops! Page Not Found</h2>
            <p className='text-gray-800 mb-5'>The page your'e looking for doesn't exist or has been moved. </p>

            <Link to={"/"} className='btn  bg-linear-to-r from-[#7928CA] to-[#2AFADF] font-semibold px-6 py-2  hover:text-xl  rounded-lg'><FaHome className='text-xl'/>Go Back Home</Link>
            
            
        </div>
    );
};

export default NotFound;

