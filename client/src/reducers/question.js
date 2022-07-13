import * as actionType from '../constants/actionTypes';

const questionReducer = (state = { questionData : [] }, action) => {
    switch (action.type) {
      case actionType.ADD_QUESTION:
        return { ...state, questionData: action.data, loading: false, errors: null };
      case actionType.GET_QUESTIONS:
        // console.log((action.payload).questions);
        return { ...state, questionData: ((action.payload).questions)};
      case actionType.INC_VIEW:
        return { ...state, questionData: action.data };
      case actionType.GET_TRENDING_QUESTIONS:
        return { ...state, questionData: action.data };
      default:
        return state;
    }
  };
  
  export default questionReducer;