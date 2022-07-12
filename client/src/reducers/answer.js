import * as actionType from '../constants/actionTypes';

const answerReducer = (state = { answerData : [] }, action) => {
    switch (action.type) {
        case actionType.ADD_ANSWER:
            return { ...state, answerData: action.data, loading: false, errors: null };

        default:
            return state;
    }
  };
  
  export default answerReducer;