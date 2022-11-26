import { Router } from "express";
import { packageValidation } from "../middlewares/packageValidation.js";
import { createPackage, fetchPackages } from "../controllers/catalogue.controllers.js";

const router = Router();

router.post("/catalogue",packageValidation, createPackage);
router.get("/catalogue",fetchPackages)

export default router;
