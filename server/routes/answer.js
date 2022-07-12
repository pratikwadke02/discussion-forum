import express from 'express';

import { addAnswer } from '../controllers/answer.js';

const router = express.Router();

router.post('/add_answer', addAnswer);


export default router;