import { Router } from "express";
import { packageValidation } from "../middlewares/packageValidation";
import { createPackage, fetchPackages } from "../controllers/catalogue.controllers";

const router = Router();

router.post("/catalogue",packageValidation, createPackage);
router.get("/catalogue", fetchPackages)

export default router;
