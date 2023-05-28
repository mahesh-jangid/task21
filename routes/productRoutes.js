import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createproductreview,
} from "../controlers/productControler.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").get(getProducts).post(createProduct);
router.route("/:id/reviews").post(protect, createproductreview);

router
  .route("/:id")
  .get(getProductById)
  .delete(protect, deleteProduct)
  .put(protect, updateProduct);

export default router;
