import React from "react";
import propTypes from "prop-types";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import * as S from "./styled";

const TitleSideBar = ({ text }) => {
  return (
    <S.ContainerTitle>
      <Divider variant="middle" />
      <Typography align="center" gutterBottom variant="h6" component="h6">
        {text}
      </Typography>
      <Divider variant="middle" />
    </S.ContainerTitle>
  );
};

TitleSideBar.propTypes = {
  text: propTypes.string.isRequired,
};

export default TitleSideBar;
