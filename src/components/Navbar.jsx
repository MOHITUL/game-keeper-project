import React, { useContext } from 'react';
import lgImg from "../assets/logo.png";
import { AuthContext } from '../Provider/AuthProvider';
import { Link, NavLink, useNavigate } from 'react-router';
import { MdLogout } from 'react-icons/md';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => navigate("/"))
      .catch((err) => console.error(err));
  }

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/games'>Games</NavLink></li>
            <li><NavLink to='/installation'>Installation</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            {user ? (
              <>
                <li>
                  <Link to={"/profile"}>My Profile</Link>
                </li>
                <li><button onClick={handleLogout}>Logout</button></li>
              </>

            ) : (
              <>
                <li><NavLink to='/login'>Login</NavLink></li>
                <li><NavLink to='/register'>Register</NavLink></li>
              </>
            )}
          </ul>
        </div>

        <div className='flex items-center gap-2'>
          <img className='h-10 w-10' src={lgImg} alt="" />
          <Link to='/' className="text-2xl font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">AMEKEEPER</Link>
        </div>
      </div>

      <div className="navbar-end hidden lg:flex ">
        <ul className="menu menu-horizontal px-4">
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/games'>Games</NavLink></li>
          <li><NavLink to='/installation'>Installation</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          {!user && (
            <>
              <li><NavLink to={"/login"}>LogIn</NavLink></li>
              <li><NavLink to={"/signup"}>SignUp</NavLink></li>
            </>
          )}

        </ul>
        {
          user && (
            <div className='flex items-center gap-3'>
              <Link to={"/profile"}>
                <img src={user.photoURL} alt="" className='h-10 w-10 rounded-full border-2 border-[#632EE3] cursor-pointer' title='{user.displayName}' />
              </Link>
              <button onClick={handleLogout} className='btn btn-sm bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-sm font-semibold  text-white hover:bg-[#5225b8]'><MdLogout className='text-xl' />
                LogOut</button>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Navbar;
