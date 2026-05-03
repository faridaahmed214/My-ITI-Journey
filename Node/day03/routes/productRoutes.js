import express from "express";
import { 
  getAllProducts, 
  createProduct, 
  updateProductPatch, 
  updateProductPut, 
  deleteProduct 
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getAllProducts);
router.post("/", createProduct);
router.patch("/:id", updateProductPatch);
router.put("/:id", updateProductPut);
router.delete("/:id", deleteProduct);

export default router;