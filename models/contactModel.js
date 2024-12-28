import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
   {
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
         required: [true, "Please enter the phone number"],
      },
   },
   { timestamps: true }
);

export default mongoose.model("Contact", contactSchema);
