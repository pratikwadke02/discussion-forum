import express from 'express';

import { addAnswer, getAnswersByQuestionId } from '../controllers/answer.js';

const router = express.Router();

router.post('/add_answer', addAnswer);
router.get('/get_answers_by_question_id/:questionId', getAnswersByQuestionId);


export default router;