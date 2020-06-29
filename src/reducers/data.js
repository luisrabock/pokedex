const data = (state = [], action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    case "NOT_FOUND":
      return {
        ...state,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default data;
