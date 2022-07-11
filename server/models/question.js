import mongoose from "mongoose";

const questionSchema = mongoose.Schema({
    questionId: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    answers: [{
        answerId: {
            type: String,
            required: true
        },
        answer: {
            type: String,
            required: true
        }
    }]
});

export default mongoose.model("Question", questionSchema);