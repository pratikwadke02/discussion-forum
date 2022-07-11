import * as api from '../api/index.js';
import { GET_PROFILE } from '../constants/actionTypes.js';

export const getProfile = () => async (dispatch) => {
    try {
      const { data } = await api.getProfile();
      dispatch({ type: GET_PROFILE, data });
    } catch (error) {
      console.log(error);
    }
  }