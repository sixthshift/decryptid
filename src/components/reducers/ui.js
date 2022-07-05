const initialState = {
  radius: 30,
  spacing: 0.01,
};

// eslint-disable-next-line default-param-last
export default (state = initialState, action) => {
  if (['cube', 'disc', 'shack', 'stone', 'tile'].includes(action.type)) {
    if (action.type === state.mode) {
      return { ...state, mode: undefined };
    }
    return { ...state, mode: action.type };
  }

  return state;
};
