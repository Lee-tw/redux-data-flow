const reducer = (state = 'Default State', action) => {
  if (action.type === 'SET_USER') {
    return { ...state, user: action.payload };
  }
  return state;
};

export default reducer;
