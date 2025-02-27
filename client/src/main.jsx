import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <Router>
         <div className="flex flex-col min-h-screen items-center mb-12 bg-gray-100">
            <Navbar />
            <Routes>
               <Route path="/" element={<App />} />
               <Route path="/home" element={<Home />} />
               <Route path="/signup" element={<Signup />} />
               <Route path="/login" element={<Login />} />
            </Routes>
         </div>
      </Router>
   </StrictMode>
);
