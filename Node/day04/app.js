import express from "express";
import mongoose from "mongoose";

import productRouter from "./routes/productRoutes.js";
import categoryRouter from "./routes/categoryRoutes.js";

const app = express();

app.use(express.json());

app.use("/products", productRouter);
app.use("/categories", categoryRouter); 

mongoose.connect("mongodb://localhost:27017/Restaurant")
  .then(() => {
    console.log("Connected to MongoDB Compass");
    app.listen(3000, () => console.log("Server is running on port 3000"));
  })
  .catch((err) => console.log("Database connection error", err));

