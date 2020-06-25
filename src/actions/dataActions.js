const setData = (data) => {
  console.log("setData", data);
  return {
    type: "SET_DATA",
    payload: data,
  };
};

export default {
  setData,
};
