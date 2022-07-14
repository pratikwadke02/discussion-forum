import Question from "../models/question.js";

export const addQuestion = async (req, res) => {
    try{
        console.log(req.body);
        const question = await Question.findOne({question: req.body.question});
        if(question){
            return res.status(409).send({message: "Question already exists"});
        }
        const newQuestion = new Question({...req.body});
        await newQuestion.save();
        const questions = await Question.find({});
        res.status(201).send({questions});
    }catch(error){
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
}

export const getQuestions = async (req, res) => {
    try{
        const questions = await Question.find();
        res.status(200).json({ questions });
    }catch(error){
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
}

export const incView = async (req, res) => {
    try{
        console.log(req.params.id);
        const question = await Question.findById(req.params.id);
        question.views++;
        await question.save();
        const questions = await Question.find();
        console.log(questions);
        res.status(200).json({ questions });
    }catch(error){
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
}