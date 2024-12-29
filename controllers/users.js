import expressAsyncHandler from "express-async-handler";
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jsonWebToken from "jsonwebtoken";

const handleRegisterUser = expressAsyncHandler(async (req, res) => {
   const { username, email, password } = req.body;
   if (!username || !email || !password) {
      res.status(400);
      throw new Error("All fields are mandatory!");
   }

   const userAvailiable = await userModel.findOne({ email });

   if (userAvailiable) {
      res.status(400);
      throw new Error("User already registered!");
   }

   const hashPassword = await bcrypt.hash(password, 10);

   const user = await userModel.create({
      username,
      email,
      password: hashPassword,
   });

   if (user) {
      res.status(201).json({
         message: "user registered successfully !!",
         user: {
            id: user._id,
            email: user.email,
            username: user.username,
         },
      });
   } else {
      res.status(400);
      throw new Error("User data is not valid");
   }
});

const handleLoginUser = expressAsyncHandler(async (req, res) => {
   const { email, password } = req.body;
   if (!email || !password) {
      res.status(400);
      throw new Error("Please fill all the fields!!");
   }

   const user = await userModel.findOne({ email });

   if (user && (await bcrypt.compare(password, user.password))) {
      const accessToken = jsonWebToken.sign(
         {
            user: {
               username: user.username,
               email: user.email,
               id: user._id,
            },
         },
         process.env.SECRET,
         { expiresIn: "10m" }
      );
      res.status(200).json({ message: "Login Successfull...", accessToken });
   } else {
      res.status(401);
      throw new Error("Email or password is invalid");
   }

   res.json({ message: "login user" });
});

const handleGetCurrentUser = (req, res) => {
   res.json({ message: "Current user info", user: req.user });
};

export { handleGetCurrentUser, handleLoginUser, handleRegisterUser };
