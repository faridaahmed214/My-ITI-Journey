import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
const router = express.Router();

const dummyProducts = [
  { id: 1, name: "Pizza", price: 200, category: "Food" },
  { id: 2, name: "Burger", price: 150, category: "Food" },
];

router.get("/", protect, (req, res) => {
  res.json({
    products: dummyProducts,
    user: { userId: req.user.userId, role: req.user.role },
  });
});

export default router;
