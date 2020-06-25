import React from "react";
import propTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";

import * as S from "./styled";

const ImageAvatars = ({ image, name }) => {
  return (
    <S.ContainerAvatar>
      <Avatar alt={name} src={image} />
    </S.ContainerAvatar>
  );
};

ImageAvatars.propTypes = {
  image: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
};

export default ImageAvatars;
