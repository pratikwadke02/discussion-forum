import express from 'express';

import { signup, signin } from '../controllers/user.js';

const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);
// router.get("/profile/:id", getProfile);

export default router;