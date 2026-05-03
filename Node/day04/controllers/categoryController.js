import { Category } from "../models/categoryModel.js";
import { Product } from "../models/productModel.js"; 

export const createCategory = async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json({ data: newCategory });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json({ data: categories });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getCategoryProducts = async (req, res) => {
  try {
    const { id } = req.params; 
    
    const products = await Product.find({ category: id });
    
    res.status(200).json({ 
      categoryID: id,
      count: products.length,
      data: products 
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};