import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../utils/constants.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
   const [username, setUsername] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const handleSignUp = async () => {
      try {
         const response = await axios.post(`${API_URL}/users/register`, {
            username,
            email,
            password,
         });

         console.log(response.data);
         toast.success("Sign up successful!"); // Show success toast
      } catch (error) {
         console.log(error.response.data);
         toast.error(error.response.data.message);
      }
   };

   return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
         <ToastContainer /> {/* Toast container for displaying messages */}
         <h1 className="text-3xl font-semibold mb-4">Signup</h1>
         <div className="w-80">
            <input
               type="text"
               placeholder="Enter your username"
               value={username}
               onChange={(e) => setUsername(e.target.value)}
               className="w-full border rounded-md px-3 py-2 mb-3"
            />
            <input
               type="email"
               placeholder="Enter your email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               className="w-full border rounded-md px-3 py-2 mb-3"
            />
            <input
               type="password"
               placeholder="Enter your password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               className="w-full border rounded-md px-3 py-2 mb-3"
            />
            <button
               onClick={handleSignUp}
               className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
               Sign Up
            </button>
         </div>
      </div>
   );
};

export default Signup;
