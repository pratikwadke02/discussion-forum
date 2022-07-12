import * as actionType from '../constants/actionTypes';

const questionReducer = (state = { questionData : [] }, action) => {
    switch (action.type) {
      case actionType.ADD_QUETSION:
        return { ...state, questionData: action.data, loading: false, errors: null };
      case actionType.GET_QUESTIONS:
        // console.log((action.payload).questions);
        return { ...state, questionData: ((action.payload).questions)};
      default:
        return state;
    }
  };
  
  export default questionReducer;