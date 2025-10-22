import React from 'react';
import { Link, NavLink} from 'react-router';
import lgImg from "../assets/logo.png"

const Navbar = () => {
    return (
        
        <div className="navbar bg-base-100 shadow-sm">
            
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                        <li className='font-semibold text-xl'>
                            <NavLink to='/' className={({isActive}) => isActive ? 'text-blue-600 font-bold' : 'text-gray-600 hover:text-blue-500'}>Home</NavLink>
                        </li>
                        <li className='font-semibold text-xl'>
                            <NavLink to='/games' className={({isActive}) => isActive ? 'text-[#632EE3] font-bold' : 'text-black hover:text-[#632EE3]'} >Games</NavLink>
                        </li>
                        <li className='font-semibold text-xl'>
                            <NavLink to='/installation' className={({isActive}) => isActive ? 'text-[#632EE3] font-bold' : 'text-black hover:text-[#632EE3]'}>Installation</NavLink>
                        </li>
                        <li className='font-semibold text-xl'>
                            <NavLink to='/login' className={({isActive}) => isActive ? 'text-[#632EE3] font-bold' : 'text-black hover:text-[#632EE3]'}>LogIn</NavLink>
                        </li>
                        <li className='font-semibold text-xl'>
                            <NavLink to='/signup' className={({isActive}) => isActive ? 'text-[#632EE3] font-bold' : 'text-black hover:text-[#632EE3]'}>SignUp</NavLink>
                        </li>

                    </ul>
                </div>
                
                <div className='flex justify-center items-center btn-ghost'>
                    <img className='h-10 w-10' src={lgImg} alt="" /> 
                    <Link to='/' className="text-2xl font-semibold   bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent ">AMEKEEPER</Link>
                </div>
            </div>


            {/* 2 */}
            <div className="navbar-end hidden  lg:flex justify-end">
                <ul className="menu menu-horizontal px-4 ">
                    <li className='font-semibold text-xl'>
                        <NavLink to='/' className={({isActive}) => isActive ? 'text-[#632EE3] font-bold' : 'text-black hover:text-[#632EE3]'}>Home</NavLink>
                    </li>
                    <li className='font-semibold text-xl'>
                        <NavLink to='/games' className={({isActive}) => isActive ? 'text-[#632EE3] font-bold' : 'text-black hover:text-[#632EE3]'}>Games</NavLink>
                    </li>
                    <li className='font-semibold text-xl'>
                        <NavLink to='/installation' className={({isActive}) => isActive ? 'text-[#632EE3] font-bold' : 'text-black hover:text-[#632EE3]'}>Installation</NavLink>
                    </li>
                    <li className='font-semibold text-xl'>
                        <NavLink to='/login' className={({isActive}) => isActive ? 'text-[#632EE3] font-bold' : 'text-black hover:text-[#632EE3]'}>LogIn</NavLink>
                    </li>
                    <li className='font-semibold text-xl'>
                        <NavLink to='/signup' className={({isActive}) => isActive ? 'text-[#632EE3] font-bold' : 'text-black hover:text-[#632EE3]'}>SignUp</NavLink>
                    </li>
                </ul>
            </div>

            
            
        </div>
        
    );
};

export default Navbar;