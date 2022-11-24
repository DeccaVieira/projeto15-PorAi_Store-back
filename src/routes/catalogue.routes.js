import { Router } from "express";
import { packageValidation } from "../middlewares/packageValidation";

const router = Router();

router.post("/catalogue",packageValidation, createPackage);
router.get("/catalogue", fetchPackages)

export default router;
