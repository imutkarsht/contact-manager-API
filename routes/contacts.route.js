import express from "express";
import {
   createContact,
   deleteContactWithID,
   fetchContactWithID,
   handleGetAllContacts,
   updateContactWithID,
} from "../controllers/contacts.js";
import validateToken from "../middlewares/validateToken.js";

const contactRouter = express.Router();

contactRouter.use(validateToken);
// Routes for the contact resource
contactRouter
   .route("/")
   .get(handleGetAllContacts) // Handle GET for all contacts
   .post(createContact); // Handle POST for creating a contact

contactRouter
   .route("/:id")
   .get(fetchContactWithID) // Handle GET for a single contact by ID
   .put(updateContactWithID) // Handle PUT for updating a contact by ID
   .delete(deleteContactWithID); // Handle DELETE for deleting a contact by ID

export default contactRouter;
