import express from 'express';

import { getProfile, signin,signuphere } from '../controllers/user.js';

const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signuphere);
router.get("/profile", getProfile);

export default router;