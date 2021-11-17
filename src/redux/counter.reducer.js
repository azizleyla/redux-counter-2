import { INCREASE, DECREMENT, INCREMENT } from "./counter.actions.types";

const initialState = { count: 0 };

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        count: state.count - 1,
      };
    case INCREASE:
      return {
        count: state.count + Number(action.payload),
      };
    default:
      return state;
  }
};
