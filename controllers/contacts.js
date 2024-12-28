import expressAsyncHandler from "express-async-handler";
import contactModel from "../models/contactModel.js";

const handleGetAllContacts = expressAsyncHandler(async (req, res) => {
   const contacts = await contactModel.find();
   res.status(200).send({
      message: "All Contacts",
      contacts,
   });
});

const fetchContactWithID = expressAsyncHandler(async (req, res, next) => {
   const id = req.params.id;
   const contact = await contactModel.findById(id);
   if (!contact) {
      const error = new Error(`Contact with id: ${id} not found`);
      error.type = 'NOT_FOUND'; // Custom error type
      return next(error); // Pass the error to the next middleware (error handler)
   }

   res.status(200).send({
      message: `Contact with id: ${id} fetched`,
      contact,
   });
});

const updateContactWithID = expressAsyncHandler(async (req, res, next) => {
   const id = req.params.id;
   const contact = await contactModel.findById(id);
   if (!contact) {
      const error = new Error(`Contact with id: ${id} not found`);
      error.type = 'NOT_FOUND';
      return next(error); 
   }

   const updatedContact = await contactModel.findByIdAndUpdate(id, req.body, {
      new: true,
   });
   res.status(200).send({
      message: `Contact with id: ${id} updated`,
      updatedContact,
   });
});

const deleteContactWithID = expressAsyncHandler(async (req, res, next) => {
   const id = req.params.id;
   const contact = await contactModel.findById(id);
   if (!contact) {
      const error = new Error(`Contact with id: ${id} not found`);
      error.type = 'NOT_FOUND';
      return next(error); 
   }

   const deletedContact = await contactModel.findByIdAndDelete(id);
   res.status(200).send({
      message: `Contact with id: ${id} deleted`,
      deletedContact,
   });
});

const createContact = expressAsyncHandler(async (req, res, next) => {
   const { name, phone, email } = req.body;
   if (!name || !phone || !email) {
      const error = new Error("All fields are mandatory");
      error.type = 'VALIDATION_ERROR'; 
      return next(error); 
   }

   const contact = await contactModel.create({ name, phone, email });

   res.status(201).send({
      message: "Contact created successfully",
      contact,
   });
});

export {
   handleGetAllContacts,
   fetchContactWithID,
   updateContactWithID,
   deleteContactWithID,
   createContact,
};
