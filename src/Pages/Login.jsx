import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../components/firebaseConfig";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful!");
    } catch (err) {
      setError(err.message);
    }
  };

  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Google Sign-In Successful!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="bg-gradient-to-b from-green-300 to-green-200">
      <div className="px-0 py-20 mx-auto max-w-7xl sm:px-4">
        <div className="w-full px-4 pt-5 pb-6 mx-auto mt-8 mb-6 bg-white rounded-lg shadow-xl sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 sm:px-6">
          <h1 className="mb-4 text-lg font-semibold text-gray-900">Log in to your account</h1>
          {error && <p className="text-red-500">{error}</p>}
          <form className="mb-8 space-y-4" onSubmit={handleLogin}>
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
                className="absolute right-3 top-9"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-6 h-6">
                    <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-6 h-6">
                    <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z" />
                  </svg>
                )}
              </button>
            </label>
            <input
              type="submit"
              className="w-full mt-1 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 font-medium text-sm px-5 py-2.5 text-center text-black rounded-md cursor-pointer"
              value="Login"
            />
          </form>
          <div className="flex flex-col w-full max-w-xs gap-y-5 items-center mb-2">
            <button
              className="bg-white flex items-center text-gray-700 justify-center gap-x-3 text-sm sm:text-base rounded-lg hover:bg-gray-100 duration-300 transition-colors border px-8 py-2.5"
              onClick={handleGoogleSignIn}
            >
              <svg className="w-5 h-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0)">
                  <path
                    d="M12.25 6.51c0-.41-.12-.79-.34-1.1H12V5h-1.1v.41H9.2v.68h1.7v1.43h1.1V7.2h1.1l.4-.68h-.4z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12.25 6.51c0-.41-.12-.79-.34-1.1H12V5h-1.1v.41H9.2v.68h1.7v1.43h1.1V7.2h1.1l.4-.68h-.4z"
                    fill="#4285F4"
                  />
                </g>
              </svg>
              Sign in with Google
            </button>
          </div>
          <p className="text-center">
            Don't have an account? <Link to="/signup" className="text-teal-600">Sign Up</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
