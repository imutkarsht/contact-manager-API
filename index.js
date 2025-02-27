import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // Import CORS middleware
import contactRouter from "./routes/contacts.route.js";
import errorHandler from "./middlewares/error.js";
import connectDB from "./config/dbConnection.js";
import userRouter from "./routes/users.route.js";

dotenv.config();
connectDB();
const app = express();

app.use(express.json());

// CORS middleware
app.use(cors());

// Define your routes
app.get("/", (req, res) => {
   res.send("Hii this is the home page!!!!");
});

app.use("/api/contacts", contactRouter);
app.use("/api/users", userRouter);
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
   console.log(`Server started on port ${PORT}`);
});
