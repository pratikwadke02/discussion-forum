import mongoose from "mongoose";

const answerSchema = mongoose.Schema({
    answer_id: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    upvotes: {
        type: Number,
        required: true
    },
    downvotes: {
        type: Number,
        required: true
    }
})

export default mongoose.model("Answer", answerSchema);