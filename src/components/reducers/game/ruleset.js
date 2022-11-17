export default (state, action) => {
  if (action.type === 'solve') {
    return action.payload;
  }
  return state;
};
