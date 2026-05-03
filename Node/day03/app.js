import express from "express";
import mongoose from "mongoose";
import productRouter from "./routes/productRoutes.js";

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/Restaurant")
  .then(() => console.log("Connected to MongoDB Compass"))
  .catch((err) => console.log("DB Connection Error", err));

app.use("/products", productRouter);

app.listen(3000, () => console.log("Server is running on port 3000 "));