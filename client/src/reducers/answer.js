import * as actionType from '../constants/actionTypes';

const answerReducer = (state = { answerData : [] }, action) => {
    switch (action.type) {
        case actionType.ADD_ANSWER:
            return { ...state, answerData: [...state.answerData, action.data], loading: false, errors: null };
        case actionType.GET_ANSWERS:
            // console.log((action.data).answerData);
            return { ...state, answerData: (action.data).answerData, loading: false, errors: null };
        default:
            return state;
    }
  };
  
  export default answerReducer;