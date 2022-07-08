const initialState = {
  radius: 30,
  spacing: 0.01,
  selected: {},
};

// eslint-disable-next-line default-param-last
export default (state = initialState, action) => {
  if (action.type === 'select') {
    return {
      ...state,
      selected: { mode: action.payload.id, colour: action.payload.colour },
    };
  }
  if (action.type === 'deselect') {
    return {
      ...state,
      selected: {},
    };
  }
  return state;
};

export const getMode = (state) => (state.ui.selected.mode);
