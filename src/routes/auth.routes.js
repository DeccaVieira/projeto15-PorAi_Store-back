import { Router } from 'express';
import { signUp } from '../controllers/auth.controllers.js';
import { userSchemaValidation } from '../middlewares/authValidation.middleware.js';

const router = Router();

router.post("/sign-up", userSchemaValidation ,signUp);
//router("/sign-in", sigIn);


export default router;