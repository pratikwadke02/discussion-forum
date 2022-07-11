import express from 'express';

import { addQuestion, getQuestions } from '../controllers/question.js';

const router = express.Router();

router.post('/add_question', addQuestion);
router.get('/get_questions', getQuestions);


export default router;