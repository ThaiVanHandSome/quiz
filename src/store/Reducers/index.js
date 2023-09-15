import { combineReducers } from '@reduxjs/toolkit';
import quizReducer from './quiz';
const rootReducer = combineReducers({
    quizReducer,
});

export default rootReducer;
