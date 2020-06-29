const modal = (state = false, action) => {
  switch (action.type) {
    case "ON_OPEN":
      return {
        ...state,
        open: action.payload,
      };
    case "ON_CLOSE":
      return {
        ...state,
        open: action.payload,
      };
    default:
      return state;
  }
};

export default modal;
