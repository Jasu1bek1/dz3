import {createAction, createReducer} from '@reduxjs/toolkit'


const INCREMENT_NUM = 'INCREMENT_NUM';
const DECREMENT_NUM = 'DECREMENT_NUM';
const SET_TEXT = 'SET_TEXT';
const INCREMENT_BY_FIVE = 'INCREMENT_BY_FIVE';
const DECREMENT_BY_FIVE = 'DECREMENT_BY_FIVE';


const initialState = {
    num: 0,
    text: 'Hello World!'
}


export const incrementNum = createAction(INCREMENT_NUM);
export const decrementNum = createAction(DECREMENT_NUM);
export const setText = createAction(SET_TEXT);
export const incrementByFive = createAction(INCREMENT_BY_FIVE);
export const decrementByFive = createAction(DECREMENT_BY_FIVE);

export default createReducer(initialState, (builder) => {
    builder
    .addCase(INCREMENT_NUM, (state, action) => {
        if (state.num < 15) {
            state.num++;
        }
    })
    .addCase(DECREMENT_NUM, (state) => {
        if (state.num > 0) {
            state.num--;
        }
    })
    .addCase(SET_TEXT, (state, action) => {
        state.text = action.payload;
    })
    .addCase(INCREMENT_BY_FIVE, (state) => {
        if (state.num <= 10) { 
            state.num += 5;
        } else {
            state.num = 15; 
        }
    })
    .addCase(DECREMENT_BY_FIVE, (state) => {
        if (state.num >= 5) { 
            state.num -= 5;
        } else {
            state.num = 0; 
        }
    });
});


