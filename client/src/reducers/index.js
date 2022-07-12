import { combineReducers } from 'redux';

import auth from './auth'
import question from './question'
import answer from './answer'

export const reducers = combineReducers({auth, question, answer });