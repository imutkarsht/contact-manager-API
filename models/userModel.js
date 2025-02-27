import mongoose from "mongoose";
import { z } from "zod";

const userSchema = mongoose.Schema(
   {
      username: {
         type: String,
         required: [true, "please add the user name"],
      },
      email: {
         type: String,
         required: [true, "please add the user email address"],
         unique: [true, "Email address already taken"],
      },
      password: {
         type: String,
         required: [true, "please add the user password"],
      },
   },
   { timestamps: true }
);

// Define Zod schema for user input validation
const UserSchemaValidator = z.object({
   username: z.string().min(3).max(50),
   email: z.string().email(),
   password: z.string().min(6),
});

// Validate user input before saving to database
userSchema.pre("save", async function () {
   const userData = this;

   try {
      await UserSchemaValidator.parseAsync(userData);
   } catch (error) {
      throw new Error(error.errors[0]);
   }
});

export default mongoose.model("ContactUser", userSchema);
