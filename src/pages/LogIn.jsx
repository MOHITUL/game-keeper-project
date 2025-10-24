import React, {  useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.config";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const Login = () => {
  useEffect(() => {
    document.title = "LogIn | GAMEKEEPER";
  }, []);
  
  const [error, setError] = useState("");
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success("Login Successful");
        navigate("/")
      })
      .catch((err) => {
        toast.error("Invalid Email or Password");
        setError(err.message);
      })
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then(() => {
        toast.success("Logged in with Google");
        navigate("/")
      })
      .catch((err) => {
        toast.error("Google Login Failed");
        setError(err.message);
      })
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-8 shadow-lg rounded-xl">
      <h2 className="text-2xl font-semibold mb-4 text-center ">Login</h2>

      <form onSubmit={handleLogin}>
        <input name="email" type="email" placeholder="Email" className="input input-bordered w-full mb-3" required />
        <input name="password" type="password" placeholder="Password" className="input input-bordered w-full mb-3" required />
        <button className="btn w-full bg-linear-to-r from-[#7928CA] to-[#2AFADF] text-lg font-semibold border-none">Login</button>
      </form>

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      <p className="text-center mt-3">
        New here? <Link to="/register" className="text-xl hover:text-[#2AFADF]">Register</Link>
      </p>

      <button onClick={handleGoogleLogin} className="btn w-full mt-3 bg-linear-to-r from-[#2AFADF] to-[#7928CA] border-none">
        <FcGoogle className="text-2xl" />
        Continue with Google
      </button>
    </div>
  );
};

export default Login;
