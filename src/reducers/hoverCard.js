const hover = (state = {}, action) => {
  switch (action.type) {
    case "ON_HOVER":
      return {
        ...state,
        info: action.payload,
      };
    default:
      return state;
  }
};

export default hover;
