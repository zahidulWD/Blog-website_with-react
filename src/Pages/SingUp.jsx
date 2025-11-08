
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../components/firebaseConfig";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Sign-Up Successful!");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Google Sign-Up Successful!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="bg-gradient-to-b from-green-300 to-green-200 py-10">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl p-6">
          <h2 className="text-2xl font-semibold text-gray-900 text-center">
            Create an Account
          </h2>
          {error && <p className="text-red-500 text-center">{error}</p>}
          
          <form className="space-y-4" onSubmit={handleSignUp}>
            <label className="block">
              <span className="text-xs font-medium text-gray-700">Your Email</span>
              <input
                className="w-full px-4 py-2 border rounded-md bg-gray-50 focus:outline-none"
                type="email"
                placeholder="Email Address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label className="block relative">
              <span className="text-xs font-medium text-gray-700">Your Password</span>
              <input
                className="w-full px-4 py-2 border rounded-md bg-gray-50 focus:outline-none pr-10"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="button"
                className="absolute right-3 top-11 transform -translate-y-1/2 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash className="w-5 h-5" /> : <FaEye className="w-5 h-5" />}
              </button>
            </label>

            <input
              type="submit"
              className="w-full bg-green-400 text-black rounded-md cursor-pointer py-2"
              value="Sign Up"
            />
          </form>

          <button
            onClick={handleGoogleSignUp}
            className="w-full bg-blue-500 text-white rounded-md py-2 mt-4"
          >
            Sign Up with Google
          </button>

          <p className="text-center text-sm text-gray-700 mt-3">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;


