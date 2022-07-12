import * as actionType from '../constants/actionTypes';

const questionReducer = (state = { questionData : null }, action) => {
    switch (action.type) {
      case actionType.ADD_QUETSION:
        return { ...state, questionData: action.data, loading: false, errors: null };
      case actionType.GET_QUESTIONS:
        return { ...state, questionData: action.data, loading: false, errors: null };
      default:
        return state;
    }
  };
  
  export default questionReducer;