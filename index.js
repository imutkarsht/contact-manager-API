import express from "express";
import dotenv from "dotenv";
import contactRouter from "./routes/contacts.route.js";
import errorHandler from "./middlewares/error.js";
import connectDB from "./config/dbConnection.js";
import userRouter from "./routes/users.route.js";

dotenv.config();
connectDB();
const app = express();

app.use(express.json());
app.get("/", (req, res) => {
   res.send("Hii this is the home page!!!!");
});

app.use("/api/contacts", contactRouter);
app.use("/api/users", userRouter);
app.use(errorHandler);

app.listen(process.env.PORT, () =>
   console.log(`server started on port ${process.env.PORT}`)
);
