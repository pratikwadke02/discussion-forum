import { ADD_ANSWER } from "../constants/actionTypes";
import * as api from '../api/index.js';

export const addAnswer = (answerData, router) => async (dispatch) => {
    try{
        console.log(answerData);
        const {data} = await api.addAnswer(answerData);
        dispatch({type: ADD_ANSWER, data});
        router(`/queuetion/${answerData.questionId}`);
    }catch(error){
        console.log(error)
    }
}