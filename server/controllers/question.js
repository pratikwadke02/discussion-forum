import Question from "../models/question.js";

export const addQuestion = async (req, res) => {
    try{
        const question = await Question.create(req.body);
        res.status(201).json({ question });
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

