import React, { useContext, useEffect, useRef } from 'react';
import lgImg from "../assets/logo.png";
import { AuthContext } from '../Provider/AuthProvider';
import { Link, NavLink, useNavigate } from 'react-router';
import { MdLogout } from 'react-icons/md';
import { toast } from 'react-toastify';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const navbarRef = useRef(null);

  useEffect(() => {
    if (!navbarRef.current) return;

    // Slide + fade in on load
    gsap.fromTo(
      navbarRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" }
    );

    // Scroll animation
    ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "200", // scroll distance
      onUpdate: (self) => {
        const scroll = self.scroll();
        if (navbarRef.current) {
          // Shrink navbar height
          navbarRef.current.style.height = scroll > 50 ? "60px" : "80px";
          // Change background color
          navbarRef.current.style.backgroundColor = scroll > 50 ? "rgba(45, 45, 60, 0.95)" : "rgba(255,255,255,1)";
          // Add shadow
          navbarRef.current.style.boxShadow = scroll > 50 ? "0 4px 12px rgba(0,0,0,0.15)" : "0 2px 6px rgba(0,0,0,0.08)";
        }
      }
    });
  }, []);

   




  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logged Out Successfully");
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Logout Failed! Try Again");
      });
  };

  return (
    <div ref={navbarRef} className="navbar shadow-sm fixed top-0 left-0 w-full z-50 ">
      <div className="navbar-start">
        {/* mobile menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/games'>Games</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            {user ? (
              <>
                <li><Link to={"/profile"}>My Profile</Link></li>
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

        {/* logo */}
        <div className='flex items-center gap-2'>
          <img className='h-10 w-10' src={lgImg} alt="logo" />
          <Link to='/' className="text-2xl font-bold bg-linear-to-r from-[#7928ca] to-[#2afadf] bg-clip-text text-transparent">
            GAMEKEEPER
          </Link>
        </div>
      </div>

      {/* desktop menu */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-4 gap-1">
          <li className='font-semibold text-xl'>
            <NavLink to='/' className={({ isActive }) => isActive ? 'text-[#2afadf] font-bold' : 'text-black hover:text-[#2afadf]'}>Home</NavLink>
          </li>
          <li className='font-semibold text-xl'>
            <NavLink to='/games' className={({ isActive }) => isActive ? 'text-[#2afadf] font-bold' : 'text-black hover:text-[#2afadf]'}>Games</NavLink>
          </li>
          <li className='font-semibold text-xl'>
            <NavLink to='/about' className={({ isActive }) => isActive ? 'text-[#2afadf] font-bold' : 'text-black hover:text-[#2afadf]'}>About</NavLink>
          </li>
          {!user && (
            <>
              <li className='font-semibold text-xl'>
                <NavLink to={"/login"} className={({ isActive }) => isActive ? 'text-[#2afadf] font-bold' : 'text-black hover:text-[#2afadf]'}>LogIn</NavLink>
              </li>
              <li className='font-semibold text-xl'>
                <NavLink to={"/register"} className={({ isActive }) => isActive ? 'text-[#2afadf] font-bold' : 'text-black hover:text-[#2afadf]'}>SignUp</NavLink>
              </li>
            </>
          )}
        </ul>

        {user && (
          <div className='flex items-center gap-3'>
            <Link to={"/profile"}>
              <img src={user.photoURL} alt="profile"
                className='h-10 w-10 rounded-full border-2 border-[#632EE3] cursor-pointer'
                title={user.displayName} />
            </Link>
            <button
              onClick={handleLogout}
              className='btn btn-sm bg-linear-to-r from-[#7928ca] to-[#2afadf] text-sm font-semibold text-white hover:bg-[#2afadf]'>
              <MdLogout className='text-xl' /> LogOut
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
