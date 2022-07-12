import mongoose from "mongoose";

const answerSchema = mongoose.Schema({
    answer_id: {
        type: String,
    },
    answer: {
        type: String,
        required: true
    },
    upvotes: {
        type: Number,
    },
    downvotes: {
        type: Number,
    }
})

export default mongoose.model("Answer", answerSchema);