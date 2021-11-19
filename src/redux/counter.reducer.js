
import {
  INCREASE,
  DECREMENT,
  INCREMENT,
  SUM,
  MULTIPLY,
  RESET,
  TOGGLE_OPERATION,
  ACTION,
} from "./counter.actions.types";

const initialState = { count: 1, curOperation: "s" };

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case INCREASE:
      return {
        ...state,
        count: state.count + Number(action.payload),
      };
    case SUM:
      return {
        ...state,
        count: state.count + Number(action.payload),
      };
    case MULTIPLY:
      return {
        ...state,
        count: state.count * Number(action.payload),
      };
    case RESET:
      return {
        ...state,
        count: 1,
      };
    case TOGGLE_OPERATION:
      return {
        ...state,
        curOperation: state.curOperation === "s" ? "m" : "s",
      };
    case ACTION:
      return {
        ...state,
        count:
          state.curOperation === "s"
            ? state.count + Number(action.payload)
            : state.count * Number(action.payload),
      };
    default:
      return state;
  }
};
