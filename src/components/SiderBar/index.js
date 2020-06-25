import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import * as S from "./styled";

import { arr } from "./utils";

const SideBar = () => {
  return (
    <S.StyledDrawer variant="permanent">
      <S.ContainerDrawer>
        <List>
          {arr.map((text, index) => (
            <ListItem key={index}>
              <S.StyledButton size="medium" color="primary">
                {text}
              </S.StyledButton>
            </ListItem>
          ))}
        </List>
      </S.ContainerDrawer>
    </S.StyledDrawer>
  );
};

export default SideBar;
