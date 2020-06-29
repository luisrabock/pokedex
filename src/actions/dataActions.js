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

export default {
  setData,
  setNotFound,
};
