import React from "react";
import axios from "axios";
import { useEffect } from "react";

const Signup = () => {
   const [username, setUsername] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const handleSignUp = () => {};
   return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
         <h1>Signup</h1>
         <input
            type="text"
            placeholder="enter your username"
            onChange={setUsername(e.target.value)}
         />
         <input
            type="email"
            placeholder="enter your email"
            onChange={setEmail(e.target.value)}
         />
         <input
            type="password"
            placeholder="enter your password"
            onChange={setPassword(e.target.value)}
         />
         <button onClick={handleSignUp}>Sign Up</button>
      </div>
   );
};

export default Signup;
