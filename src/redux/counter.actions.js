import { INCREASE, INCREMENT, DECREMENT } from "./counter.actions.types";

export const increment = () => {
  return { type: INCREMENT };
};
export const decrement = () => {
  return { type: DECREMENT };
};
export const increase = (payload) => {
  return { type: INCREASE, payload: payload };
};
