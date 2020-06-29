import React from "react";
import propTypes from "prop-types";

import { checkColorType } from "../../utils/utils";

import * as S from "./styled";

const AtacksBar = ({ value, type }) => {
  return (
    <S.LinearProgressStyled
      variant="determinate"
      value={value}
      colorback={checkColorType(type.toUpperCase())}
    />
  );
};

AtacksBar.propTypes = {
  value: propTypes.number.isRequired,
  type: propTypes.string.isRequired,
};

export default AtacksBar;
