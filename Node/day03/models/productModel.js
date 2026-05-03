import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Product must have a name"] },
  price: { type: Number, required: [true, "Product must have a price"], min: [0, "Price can't be negative"] },
  category: { type: String, default: "Food" },
});

export const Product = mongoose.model("Product", productSchema);
