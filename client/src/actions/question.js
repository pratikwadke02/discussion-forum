import { ADD_QUESTION, GET_QUESTIONS, GET_QUESTION, INC_VIEW, GET_TRENDING_QUESTIONS } from "../constants/actionTypes";
import * as api from '../api/index.js';

export const addQuestion = (questionData, router) => async (dispatch) => {
    try{
        console.log(questionData);
        const {data} = await api.addQuestion(questionData);
        dispatch({type: ADD_QUESTION, data});
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

export const incView = (id) => async (dispatch) => {
    try{
        console.log(id);
        const {data} = await api.incView(id);
        dispatch({type: INC_VIEW, data});
    }catch(error){
        console.log(error)
    }
}

// export const getTrendingQuestions = () => async (dispatch) => {
//     try{
//         const {data} = await api.getTrendingQuestions();
//         dispatch({type: GET_TRENDING_QUESTIONS, data});
//     }catch(error){
//         console.log(error);
//     }
// }