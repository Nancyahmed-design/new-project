import * as TYPES from '../types/types';

const INITIAL_STATE = {
    number: 0,
  }

export default (
    state =INITIAL_STATE , action) => {
   
    switch (action.type) {
        case TYPES.SET_CURRENT_COUNTER :
            return {
                ...state,
                number: action.payload,
            };
        default:
            return state;
    }
};