import { useEffect, useState } from "react";
import { API_URL } from "../utils/constants.js";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
   const [contacts, setContacts] = useState([]);
   useEffect(() => {
      const fetchContacts = async () => {
         try {
            const token = localStorage.getItem("accessToken");

            const headers = { Authorization: `Bearer ${token}` };

            const response = await axios.get(`${API_URL}/contacts`, {
               headers,
            });

            console.log(response.data);

            setContacts(response.data.contacts);
         } catch (error) {
            console.error("Error fetching contacts:", error);
         }
      };

      fetchContacts();
   }, []);

   const handleLogOut = () => {
      localStorage.removeItem("accessToken");
      toast.success("Logged out successfully!");
      navigate("/login");
   };
   return (
      <div>
         <ToastContainer />
         <h1>All contacts</h1>
         <ul>
            {contacts.map((contact) => (
               <li key={contact._id}>
                  {contact.name} - {contact.email}
               </li>
            ))}
         </ul>
         <button onClick={handleLogOut}>Log out</button>
      </div>
   );
}

export default Home;
