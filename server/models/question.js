import mongoose from "mongoose";

const questionSchema = mongoose.Schema({
    question_id: {
        type: String,
    },
    question: {
        type: String,
        required: true
    },
    views: {
        type: Number,
        default: 0
    },
    answers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Answer',
    }]
});

export default mongoose.model("Question", questionSchema);