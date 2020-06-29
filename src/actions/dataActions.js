const setData = (data) => {
  return {
    type: "SET_DATA",
    payload: data,
  };
};

const setNotFound = (data) => {
  return {
    type: "NOT_FOUND",
    payload: data,
  };
};

const setSinglePokemon = (data) => {
  return {
    type: "SET_SINGLE",
    payload: data,
  };
};

export default {
  setData,
  setNotFound,
  setSinglePokemon,
};
