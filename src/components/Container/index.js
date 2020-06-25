import React from "react";
import propTypes from "prop-types";

import * as S from "./styled";

const Container = ({ children }) => {
  return <S.LayoutMain>{children}</S.LayoutMain>;
};

Container.propTypes = {
  children: propTypes.node.isRequired,
};
export default Container;
