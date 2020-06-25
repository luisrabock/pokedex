const setUser = (userObj) => {
  console.log("userObj", userObj);
  return {
    type: "SET_USER",
    payload: userObj,
  };
};

const logOut = () => {
  return {
    type: "LOG_OUT",
  };
};

export default {
  setUser,
  logOut,
};
