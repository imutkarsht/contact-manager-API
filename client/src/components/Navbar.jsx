import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Navbar = () => {
   const navigate = useNavigate();
   const handleLogOut = () => {
      localStorage.removeItem("accessToken");
      toast.success("Logged out successfully!");
      navigate("/login");
   };
   const token = localStorage.getItem("accessToken");
   return (
      <nav className="flex items-center justify-around w-full p-6">
         <ToastContainer />
         <h1>
            <Link to={"/home"}>Contact API</Link>
         </h1>
         <ul>
            {token ? (
               <li>
                  <button onClick={handleLogOut}>Logout</button>
               </li>
            ) : (
               <div className="flex items-center space-x-2">
                  <li className="">
                     <Link to={"/signup"}>Sign Up</Link>
                  </li>
                  <li>
                     <Link to={"/login"}>Login</Link>
                  </li>
               </div>
            )}
         </ul>
      </nav>
   );
};

export default Navbar;
