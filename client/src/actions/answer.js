import { ADD_ANSWER, GET_ANSWERS } from "../constants/actionTypes";
import * as api from '../api/index.js';

export const addAnswer = (answerData, router) => async (dispatch) => {
    try{
        console.log(answerData);
        const {data} = await api.addAnswer(answerData);
        dispatch({type: ADD_ANSWER, data});
        router(`/question/${answerData.questionId}`);
    }catch(error){
        console.log(error)
    }
}

export const getAnswersByQuestionId = (questionId, router) => async (dispatch) => {
    try{
        // console.log(questionId);
        const {data} = await api.getAnswersByQuestionId(questionId);
        dispatch({type: GET_ANSWERS, data});
    }catch(error){
        console.log(error)
    }
}