import express from "express";
import fs from "fs/promises";
import { v4 as uuidv4 } from "uuid";

const app = express();
const FILE_PATH = "./products.json";

app.use(express.json());

const readProducts = async () => {
  try {
    const data = await fs.readFile(FILE_PATH, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

const writeProducts = async (products) => {
  await fs.writeFile(FILE_PATH, JSON.stringify(products));
};

app.get("/products", async (req, res) => {
  const products = await readProducts();
  res.status(200).json({ data: products });
});

app.get("/products/:id", async (req, res) => {
  const products = await readProducts();
  const product = products.find((p) => p.id === req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.status(200).json({ data: product });
});

app.post("/products", async (req, res) => {
  try {
    const { name, price } = req.body;
    if (!name || !price) {
      return res.status(400).json({ message: "Name and price are required" });
    }
    const products = await readProducts();
    const newProduct = { id: uuidv4(), name, price };
    products.push(newProduct);
    await writeProducts(products);
    res.status(201).json({ data: newProduct });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.patch("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const products = await readProducts();
    const index = products.findIndex((p) => p.id === id);

    if (index === -1) {
      return res.status(404).json({ message: "Product not found" });
    }

    products[index] = { ...products[index], ...updates };
    await writeProducts(products);
    res.status(200).json({ data: products[index] });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.put("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const products = await readProducts();
    const index = products.findIndex((p) => p.id === id);

    if (index === -1) {
      return res.status(404).json({ message: "Product not found" });
    }

    products[index] = {
      id: id,
      name: req.body.name,
      price: req.body.price,
    };

    await writeProducts(products);
    res.status(200).json({ data: products[index] });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.delete("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const products = await readProducts();
    
    const deletedProduct = products.find((p) => p.id === id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    const filteredProducts = products.filter((p) => p.id !== id);
    
    await writeProducts(filteredProducts);
    
    res.status(200).json({ id: deletedProduct.id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(3000, () => console.log("Server is running on port 3000"));
