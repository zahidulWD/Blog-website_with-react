// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";  // Authentication এবং GoogleAuthProvider ফাংশন ইমপোর্ট করা হয়েছে

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6UD4nY5m4ZMTBKGjtJRUlH-s1olBzFbE",
  authDomain: "blog-website-20f49.firebaseapp.com",
  projectId: "blog-website-20f49",
  storageBucket: "blog-website-20f49.appspot.com",
  messagingSenderId: "13187746820",
  appId: "1:13187746820:web:975169cfd9b096c04a3951"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Authentication সার্ভিস ইন্সট্যান্স তৈরি করা
const googleProvider = new GoogleAuthProvider(); // GoogleAuthProvider ইনিশিয়ালাইজ করা

// Export `auth` এবং `googleProvider` so they can be used in other files
export { auth, googleProvider };  // googleProvider এক্সপোর্ট করা হয়েছে
