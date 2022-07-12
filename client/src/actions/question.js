import { ADD_QUETSION, GET_QUESTIONS } from "../constants/actionTypes";
import * as api from '../api/index.js';

export const addQuestion = (questionData, router) => async (dispatch) => {
    try{
        console.log(questionData);
        const {data} = await api.addQuestion(questionData);
        dispatch({type: ADD_QUETSION, data});
        router('/');
    }catch(error){
        console.log(error)
    }
}

export const getQuestions = () => async (dispatch) => {
    try{
        const {data} = await api.getQuestions();
        dispatch({type: GET_QUESTIONS, data});
    }catch(error){
        console.log(error)
    }
}