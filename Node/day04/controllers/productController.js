import { Product } from "../models/productModel.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("category"); 
    res.status(200).json({ data: products });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id).populate("category");
    
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json({ data: product });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json({ data: newProduct });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { 
      new: true,          
      runValidators: true 
    }).populate("category");

    if (!updatedProduct) return res.status(404).json({ message: "Product not found" });
    res.status(200).json({ data: updatedProduct });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) return res.status(404).json({ message: "Product not found" });
    res.status(200).json({ message: "Product deleted successfully", id: deletedProduct._id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const deleteAllProducts = async (req, res) => {
  try {
    const result = await Product.deleteMany({}); 
    res.status(200).json({ 
      message: "All products deleted successfully",
      deletedCount: result.deletedCount
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};