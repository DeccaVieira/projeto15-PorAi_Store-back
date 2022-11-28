import { Router } from "express";
import { createCheckout } from "../controllers/checkout.controller.js";
import { authRoutesValidation } from "../middlewares/authValidation.middleware.js";

const router = Router();

router.post("/checkout",authRoutesValidation, createCheckout);

export default router;