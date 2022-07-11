import mongoose from "mongoose";

const answerSchema = mongoose.Schema({
    answerId: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    }
})

export default mongoose.model("Answer", answerSchema);