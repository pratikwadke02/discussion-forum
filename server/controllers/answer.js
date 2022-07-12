import Answer from '../models/answer.js';
import Question from '../models/question.js';

export const addAnswer = async (req, res) => {
    try{
        console.log(req.body);
        const answer = await Answer.create(req.body);
        const question = await Question.findById(req.body.questionId);
        await new Answer ({...req.body }).save().then(async(answer) => {
            await Question.findByIdAndUpdate(req.body.questionId, {$push: {answers: answer._id}});
            const question = await Question.findOne({_id: req.body.questionId}).populate('answers');
            console.log(question);
            }
            );
            res.status(200).json({message: 'Answer added successfully'});
    }catch(error){
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
}

export const getAnswersByQuestionId = async (req, res) => {
    try{
        const question = await Question.findOne({_id: req.params.questionId}).populate('answers');
        const answerData = question.answers;
        res.status(200).json({answerData});

    }catch(error){
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
}