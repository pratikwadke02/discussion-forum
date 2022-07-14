import express from 'express';

import { addQuestion, getQuestions, incView } from '../controllers/question.js';

const router = express.Router();

router.post('/add_question', addQuestion);
router.get('/get_questions', getQuestions);
router.post('/inc_view/:id', incView);


export default router;