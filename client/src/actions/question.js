import { ADD_QUETSION, GET_QUESTIONS, GET_QUESTION, INC_VIEW } from "../constants/actionTypes";
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
        dispatch({type: GET_QUESTIONS, payload: data});
    }catch(error){
        console.log(error)
    }
}

export const incView = (id, router) => async (dispatch) => {
    try{
        const {data} = await api.incView(id);
        dispatch({type: INC_VIEW, data});
    }catch(error){
        console.log(error)
    }
}
