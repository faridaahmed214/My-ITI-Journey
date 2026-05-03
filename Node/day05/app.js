import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "./routes/authRoutes.js";
import productRouter from "./routes/productRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());

app.use("/auth", authRouter);
app.use("/products", productRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to DB");
    app.listen(process.env.PORT, () =>
      console.log(`Server on ${process.env.PORT}`),
    );
  })
  .catch((err) => console.log(err));
