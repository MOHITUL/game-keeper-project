import React, { useEffect, useState, useRef } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  useEffect(() => {
    document.title = "LogIn | GAMEKEEPER";
  }, []);

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const emailRef = useRef();

  // Email/Password login
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success("Login Successful");
        navigate("/");
      })
      .catch((err) => {
        toast.error("Invalid Email or Password");
        setError(err.message);
      });
  };

  // Google login
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then(() => {
        toast.success("Logged in with Google");
        navigate("/");
      })
      .catch((err) => {
        toast.error("Google Login Failed");
        setError(err.message);
      });
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Password reset
  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      toast.error("Please enter your email first");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Check your email to reset password");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-8 shadow-lg rounded-xl">
      <h2 className="text-3xl font-semibold mb-6 text-center bg-linear-to-r from-purple-600 to-cyan-400 bg-clip-text text-transparent">
        Login to GAMEKEEPER
      </h2>

      <form onSubmit={handleLogin}>
        <input
          ref={emailRef}
          name="email"
          type="email"
          placeholder="Email"
          className="input input-bordered w-full mb-3"
          required
        />

        <div className="relative mb-3">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="input input-bordered w-full mb-3"
            required
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/3 transform -translate-y-1/3"
          >
            {showPassword ? <FaEyeSlash size={25} /> : <FaEye size={25} />}
          </button>
        </div>

        <button className="btn w-full bg-linear-to-r from-[#7928CA] to-[#2AFADF] text-lg font-semibold border-none">
          Login
        </button>
      </form>

      <button
        className="hover:underline cursor-pointer mt-3"
        onClick={handleForgetPassword}
        type="button"
      >
        Forget password?
      </button>

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      <p className="text-center mt-3">
        New here?{" "}
        <Link to="/register" className="text-xl hover:text-[#2AFADF]">
          Register
        </Link>
      </p>

      <div className="flex items-center mt-3">
        <hr className="flex-1 border-[#2AFADF]" />
        <div className="mx-4 flex space-x-4">Or Continue with</div>
        <hr className="flex-1 border-[#2AFADF]" />
      </div>

      <button
        onClick={handleGoogleLogin}
        className="btn w-full mt-3 bg-linear-to-r from-[#2AFADF] to-[#7928CA] border-none flex items-center justify-center space-x-2"
      >
        <FcGoogle className="text-2xl" />
        <span>Continue with Google</span>
      </button>
    </div>
  );
};

export default Login;
