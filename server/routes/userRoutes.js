import express from 'express';
import { register,login, getUserProfile, logout, updateUserProfile } from '../controllers/userController.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';
import upload from '../utils/multer.js';

const router = express.Router();

router.post('/register', register);

router.post('/login', login);

router.get("/profile",isAuthenticated,getUserProfile);

router.get("/logout",logout);

router.put("/profile/update",isAuthenticated,upload.single("profilePhoto"),updateUserProfile);

export default router;