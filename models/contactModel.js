import mongoose from "mongoose";
import { z } from "zod";

const contactSchema = new mongoose.Schema(
   {
      user_id: {
         type: mongoose.Schema.Types.ObjectId,
         required: true,
         ref: "ContactUser",
      },
      name: {
         type: String,
         required: [true, "Please add contact name"],
      },
      email: {
         type: String,
         required: [true, "Please add email address"],
      },
      phone: {
         type: String,
         required: [true, "Please enter phone number"],
      },
   },
   { timestamps: true }
);

const ContactSchemaValidator = z.object({
   user_id: z.string().uuid(),
   name: z.string().min(3).max(50),
   email: z.string().email(),
   phone: z.string().min(10).max(20),
});

// Validate contact input before saving to database
contactSchema.pre("save", async function () {
   const contactData = this;

   try {
      await ContactSchemaValidator.parseAsync(contactData);
   } catch (error) {
      throw new Error(error.errors[0]);
   }
});

export default mongoose.model("Contact", contactSchema);
