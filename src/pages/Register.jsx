import React, { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  useEffect(() => {
    document.title = "SignUp | GAMEKEEPER";
  }, []);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false)

  const handleRegister = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    // Password validation
    if (!/(?=.*[A-Z])/.test(password))
      return setError("Password must contain an uppercase letter");
    if (!/(?=.*[a-z])/.test(password))
      return setError("Password must contain a lowercase letter");
    if (password.length < 6)
      return setError("Password must be at least 6 characters");

    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        updateProfile(result.user, { displayName: name, photoURL: photo })
        toast.success("Account created successfully!")
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then(() => {
        toast.success("Logged in with Google!");
        navigate("/")
      }
      )
      .catch(err => setError(err.message));
  };

  const togglePasswordVisibility = () =>{
    setShowPassword(!showPassword);
  }

  return (
    <div className="max-w-md mx-auto mt-20 p-8 shadow-lg rounded-xl">
      <h2 className="text-3xl font-semibold mb-4 text-center  bg-linear-to-r from-purple-600 to-cyan-400 bg-clip-text text-transparent">create an account on GAMEKEEPER</h2>

      <form onSubmit={handleRegister}>
        <input name="name" type="text" placeholder="Name" className="input input-bordered w-full mb-3" required />
        <input name="photo" type="text" placeholder="Photo URL" className="input input-bordered w-full mb-3" />
        <input name="email" type="email" placeholder="Email" className="input input-bordered w-full mb-3" required />


        <div className="relative mb-3">
          <input name="password" type={showPassword ? "text" : "password"}
          placeholder="Password" className="input input-bordered w-full mb-3" required />

          <button type="button" onClick={togglePasswordVisibility} className="absolute right-3 top-1/3 transform -translate-y-1/3">
          {showPassword ? <FaEyeSlash size={25}/> : <FaEye size={25}/>}</button>
        </div>


        <button className="btn w-full bg-linear-to-r from-[#7928ca] to-[#2afadf] border-none">Register</button>
      </form>

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      <p className="text-center mt-3">
        Already have an account? <Link to="/login" className=" font-semibold  text-xl hover:text-[#2afadf]">Login</Link>
      </p>

      <div className="flex items-center mt-3">
        <hr className="flex-1 border-[#2AFADF]"/>
        <div className="mx-4 flex space-x-4">
          Or Continue with
        </div>
        <hr className="flex-1 border-[#2AFADF]"/>
      </div>

      <button onClick={handleGoogleLogin} className="btn w-full mt-3  bg-linear-to-r from-[#2afadf] to-[#7928ca] border-none font-semibold text-sm">
        <FcGoogle className="text-2xl" />
        Continue with Google
      </button>
    </div>
  );
};

export default Register;
