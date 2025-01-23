import express from 'express';
import { register,login, getUserProfile, logout } from '../controllers/userController.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';

const router = express.Router();

router.post('/register', register);

router.post('/login', login);

router.get("/profile",isAuthenticated,getUserProfile);

router.get("/logout",logout);

export default router;