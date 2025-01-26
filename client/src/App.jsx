import { useEffect, useState } from "react";
import { API_URL } from "./utils/constants.js";
import axios from "axios";

function App() {
   const [contacts, setContacts] = useState([]);
   useEffect(() => {
      const fetchContacts = async () => {
         try {
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiam9obiIsImVtYWlsIjoiam9obmRvZUBnbWFpbC5jb20iLCJpZCI6IjY3NzI1MDMxOWFmMjJhNWE1MTYwNzI2NCJ9LCJpYXQiOjE3Mzc5MDk4MzUsImV4cCI6MTczNzkxMDQzNX0.89VfTcc4Kek1Grf_Cgn5yfNu0h534Gb0gXRTkzliXes" || localStorage.getItem("authToken");

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

   return (
      <div>
         <h1>All contacts</h1>
         <ul>
            {contacts.map((contact) => (
               <li key={contact._id}>
                  {contact.name} - {contact.email}
               </li>
            ))}
         </ul>
      </div>
   );
}

export default App;
