

export const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return {
        counter: state.count + 1,
      };
    case "DECREASE":
      return {
        counter: state.count - 1,
      };
    case "INCREMENT":
      return {
        counter: state.count + action.payload,
      };
    default:
      return state;
  }
};
