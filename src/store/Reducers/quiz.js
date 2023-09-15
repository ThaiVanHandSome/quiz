import { createSlice } from '@reduxjs/toolkit';

const initialValue = {};

const quizSlice = createSlice({
    name: 'quiz',
    initialState: initialValue,
    reducers: {
        add: {
            reducer: (state, action) => {
                // const newState = { ...state };
                const name = action.payload.name;
                if (!Array.isArray(state[name])) {
                    state[name] = [];
                }
                state[name].push(action.payload.data);
                // return newState;
            },
            prepare: (quizData) => {
                return {
                    payload: {
                        name: quizData.quizName,
                        data: {
                            question: quizData.question,
                            options: [quizData.optionA, quizData.optionB, quizData.optionC, quizData.optionD],
                            correctOption: null,
                        },
                    },
                };
            },
        },
        change: {
            reducer: (state, action) => {
                console.log(action.payload);
                const name = action.payload.name;
                state[name][action.payload.indexChange] = action.payload.data;
                // return newState;
            },
            prepare: (quizData) => {
                return {
                    payload: {
                        indexChange: quizData.index,
                        name: quizData.quizName,
                        data: {
                            question: quizData.question,
                            options: [quizData.optionA, quizData.optionB, quizData.optionC, quizData.optionD],
                            correctOption: null,
                        },
                    },
                };
            },
        },
    },
});

const quizReducer = quizSlice.reducer;
export const { add, change } = quizSlice.actions;

export default quizReducer;
