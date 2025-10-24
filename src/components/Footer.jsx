import React from 'react';
import { FaFacebookF, FaInfoCircle, FaInstagram, FaPaperclip, FaTwitch, FaTwitter } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa6';
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <footer className=' py-6 mt-5 '>
            <div className='container mx-auto p-5 shadow-xl'>
                <div className='flex flex-col md:flex-row justify-between items-center text-center md:text-left'>
                    <div className='mb-4 md:mb-0'>
                        <h3 className='flex items-center justify-center md:justify-start text-xl font-semibold mb-2'>
                            <FaPaperclip className='w-5 h-5 mr-2' /> Useful Sections
                        </h3>

                        <div className='space-x-4 '>
                            <NavLink to="/"> Home </NavLink>


                            <NavLink to="/games"> Games </NavLink>

                            <NavLink to="/installation"> Installation </NavLink>
                        </div>
                    </div>

                    {/* about */}
                    <div className='mb-4 md:mb-0'>
                        <h3 className='flex items-center justify-center md:justify-start  text-xl font-semibold mb-2'> <FaInfoCircle className='w-5 h-5 mr-2' /> About Us </h3>
                        <div className='space-x-4'>

                            <NavLink> About Us </NavLink>

                            <NavLink> Contact </NavLink>

                            <NavLink> Report </NavLink>
                        </div>
                    </div>
                </div>

                {/* copyright */}
                <div className='flex items-center my-4'>
                    <hr className='flex-1 border-[#2AFADF]' />
                    <div className='mx-4 flex space-x-4'>
                        <FaFacebookF className='w-5 h-5' />
                        <FaInstagram className='w-5 h-5' />
                        <FaTwitter className='w-5 h-5' />
                        <FaTwitch className='w-5 h-5' />
                        <FaTelegram className='w-5 h-5' />
                    </div>
                    <hr className='flex-1 border-[#2AFADF]' />

                </div>
                <div className='text-center mt-4'>
                    <p className='text-lg  text-gray-900'>
                        © Copyright 2025 GAMEKEEPER
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;