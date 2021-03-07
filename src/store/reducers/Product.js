import * as TYPES from '../types/Products';

export default (
  state = [],
  action
) => {
  switch (action.type) {
    case TYPES.GET_PRODUCT:
      return {
        ...state,
        ...action.payload,
      };
      default:
        return state;
    }
  }; 