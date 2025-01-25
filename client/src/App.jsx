import { useEffect, useState } from "react";
import { API_URL } from "./utils/constants.js";
import axios from "axios";

function App() {
   const [contacts, setContacts] = useState([]);
   useEffect(() => {
      const fetchContacts = async () => {
         try {
            const token =
               "" || localStorage.getItem("authToken"); 

            const headers = {
               Authorization: `Bearer ${token}`,
            };

            const response = await axios.get(`${API_URL}contacts`, {
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
