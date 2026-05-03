import { Product } from "../models/productModel.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find(); 
    res.status(200).json({ data: products });
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

export const updateProductPatch = async (req, res) => {
  try {
    const { id } = req.params;

    const updated = await Product.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

    if (!updated) return res.status(404).json({ message: "Product not found" });
    res.status(200).json({ data: updated });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateProductPut = async (req, res) => {
  try {
    const { id } = req.params;

    const updated = await Product.findOneAndReplace({ _id: id }, req.body, { new: true });

    if (!updated) return res.status(404).json({ message: "Product not found" });
    res.status(200).json({ data: updated });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Product.findByIdAndDelete(id);

    if (!deleted) return res.status(404).json({ message: "Product not found" });
    res.status(200).json({ id: deleted._id }); 
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};