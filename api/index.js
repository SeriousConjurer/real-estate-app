import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route.js";
// we cannot use environmental variables(.env) by default , we use dotenv to access them
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.get("/", (req, res) => {
  res.send("dsfsadfasdf");
});

app.use(express.json());

app.use("/api/auth", authRouter);

app.listen(3000, () => {
  console.log("sever listening to port 3000");
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
