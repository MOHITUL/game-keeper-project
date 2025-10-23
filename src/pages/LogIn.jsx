import React, { useContext, useState } from "react";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.config";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { user } = useContext(AuthContext);
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
      .then(result => {
        console.log(result.user);
        navigate("/");
      })
      .catch(err => setError(err.message));
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => navigate("/"))
      .catch(err => setError(err.message));
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-8 shadow rounded-xl">
      <h2 className="text-2xl font-semibold mb-4 text-center bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">Login</h2>

      <form onSubmit={handleLogin}>
        <input name="email" type="email" placeholder="Email" className="input input-bordered w-full mb-3" required />
        <input name="password" type="password" placeholder="Password" className="input input-bordered w-full mb-3" required />
        <button className="btn w-full bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white text-sm font-semibold">Login</button>
      </form>

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      <p className="text-center mt-3">
        New here? <Link to="/signup" className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">Register</Link>
      </p>

      <button onClick={handleGoogleLogin} className="btn w-full mt-3 border border-[#632EE3] bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
        <FcGoogle className="text-2xl"/>
           Continue with Google
      </button>
    </div>
  );
};

export default Login;
