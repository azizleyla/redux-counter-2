import {
  INCREASE,
  INCREMENT,
  DECREMENT,
  SUM,
  MULTIPLY,
  RESET,
  TOGGLE_OPERATION,
  ACTION,
} from "./counter.actions.types";

export const increment = () => {
  return { type: INCREMENT };
};
export const decrement = () => {
  return { type: DECREMENT };
};
export const increase = (payload) => {
  return { type: INCREASE, payload: payload };
};
export const sum = (payload) => {
  return { type: SUM, payload: payload };
};
export const multiply = (payload) => {
  return { type: MULTIPLY, payload: payload };
};
export const reset = () => {
  return { type: RESET };
};
export const toggle = () => {
  return { type: TOGGLE_OPERATION };
};
export const action = (payload) => {
  return { type: ACTION, payload: payload };
};
