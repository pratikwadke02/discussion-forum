import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";
import questionRoutes from "./routes/question.js";
import answerRoutes from "./routes/answer.js";

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/auth', authRoutes);
app.use('/question', questionRoutes);
app.use('/answer', answerRoutes);

const CONNECTION_URL = `mongodb+srv://pratikwadke:pratik02@cluster0.xkop1sg.mongodb.net/?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> app.listen(PORT, ()=> console.log(`Server running on Port: ${PORT}`)))
.catch((error)=> console.log(`${error} did not connect`));