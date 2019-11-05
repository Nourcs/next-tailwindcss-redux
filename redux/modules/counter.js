// constants
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const initialState = {
  total: 0,
};
// actions
export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

// reducer
export default (state = initialState, action) => {
  let total;
  switch (action.type) {
    case INCREMENT:
      total = state.total + 1;
      return { total };
    case DECREMENT:
      total = state.total - 1;
      return { total };
    default:
      return state;
  }
};
