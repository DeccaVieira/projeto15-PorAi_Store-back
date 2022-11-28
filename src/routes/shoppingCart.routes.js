import { Router } from "express";
import {
  addShoppingCart,
  deleteShoppingCart,
  showShoppingCart,
} from "../controllers/shoppingCart.controllers.js";
import { authRoutesValidation } from "../middlewares/authValidation.middleware.js";
import { shoppingCartSchemaValidation } from "../middlewares/shoppingCartSchemaValidation.middleware.js";

const router = Router();

router.post(
  "/shoppingCart",
  authRoutesValidation,
  shoppingCartSchemaValidation,
  addShoppingCart
);
router.get("/shoppingCart", authRoutesValidation,showShoppingCart);

router.delete("/shoppingCart/:_id",authRoutesValidation,deleteShoppingCart);



export default router;
