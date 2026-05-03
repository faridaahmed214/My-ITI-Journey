import express from "express";
import { 
  getAllProducts, 
  createProduct, 
  updateProduct, 
  deleteProduct,
  deleteAllProducts
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getAllProducts);
router.post("/", createProduct);
router.delete("/delete-all", deleteAllProducts);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;