import express from "express";
import { 
  createCategory, 
  getAllCategories, 
  getCategoryProducts 
} from "../controllers/categoryController.js";

const router = express.Router();

router.post("/", createCategory); 
router.get("/", getAllCategories); 
router.get("/:id/products", getCategoryProducts); 

export default router;