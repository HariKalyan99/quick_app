import express from 'express';
import { authLogin, authLogout, authSignup } from '../controllers/auth.controllers.js';


const router = express.Router();

router.post("/signup", authSignup);
router.post("/login", authLogin);
router.post("/logout", authLogout);

export default router;