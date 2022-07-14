import mongoose from "mongoose";

const answerSchema = mongoose.Schema({
    answer_id: {
        type: String,
    },
    answer: {
        type: String,
        required: true
    }
})

export default mongoose.model("Answer", answerSchema);