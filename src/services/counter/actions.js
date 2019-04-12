import { INCREASE_COUNTER, DECREASE_COUNTER } from './actionTypes';
// sag: An “action” is a JS object that describes a change that we want to make. 
// The only requirement is that the object needs to have a type property, 
// and its value should be a string.
export const increaseReduxCounter = reduxCounter => ({
    type: INCREASE_COUNTER,
    payload: reduxCounter
});

export const decreaseReduxCounter = reduxCounter => ({
  type: DECREASE_COUNTER,
  payload: reduxCounter
})
