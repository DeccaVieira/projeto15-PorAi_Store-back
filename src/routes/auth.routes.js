import { Router } from 'express';
import { sigIn, signUp } from '../controllers/auth.controllers.js';
import { signInBodyValidation, userSchemaValidation } from '../middlewares/authValidation.middleware.js';

const router = Router();

router.post("/sign-up", userSchemaValidation ,signUp);
router.post("/sign-in", signInBodyValidation, sigIn);


export default router;