import { Router } from "express";
import { createCheckout, showCheckout } from "../controllers/checkout.controller.js";
import { authRoutesValidation } from "../middlewares/authValidation.middleware.js";

const router = Router();

router.post("/checkout",authRoutesValidation, createCheckout);
router.get("/checkout",authRoutesValidation, showCheckout);
export default router;