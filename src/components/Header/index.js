import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import * as S from "./styled";

const Header = () => {
  return (
    <S.StyledAppBar>
      <Toolbar>
        <Typography variant="h6" noWrap>
          Pokedex
        </Typography>
      </Toolbar>
    </S.StyledAppBar>
  );
};

export default Header;
