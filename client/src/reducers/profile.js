import * as actionType from '../constants/actionTypes';

const authReducer = (state = { profileData : null }, action) => {
    switch (action.type) {
      case actionType.GET_PROFILE:
        return { ...state, profileData: action.data, loading: false, errors: null };
      default:
        return state;
    }
  };
  
  export default authReducer;