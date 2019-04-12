import { INCREASE_COUNTER } from './actionTypes';
import { DECREASE_COUNTER } from './actionTypes';

const initialState = {
    reduxCounter: 3
};
// sag: reducer’s job is to take the current state and an action and figure out 
// the new state.
export default function(state = initialState, action) {
  console.log(state);
  switch (action.type) {
    case INCREASE_COUNTER:
      return {
        reduxCounter: state.reduxCounter + 1
      };
    case DECREASE_COUNTER:
      return {
        reduxCounter: state.reduxCounter - 1
      }
    default:
      return state;
  }
}
