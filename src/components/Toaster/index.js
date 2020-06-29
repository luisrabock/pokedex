import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import PropTypes from "prop-types";

const Alert = (props) => {
  return <MuiAlert elevation={12} variant="filled" {...props} />;
};

const Toaster = ({ open, message }) => {
  return (
    <Snackbar open={open} autoHideDuration={6000}>
      <Alert severity="warning">{message}</Alert>
    </Snackbar>
  );
};

Toaster.propTypes = {
  open: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
};

export default Toaster;
