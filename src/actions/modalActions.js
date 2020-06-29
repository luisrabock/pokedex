const open = () => {
  return {
    type: "ON_OPEN",
    payload: true,
  };
};

const close = () => {
  return {
    type: "ON_CLOSE",
    payload: false,
  };
};

export default {
  open,
  close,
};
