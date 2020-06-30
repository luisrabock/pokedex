import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import HomeIcon from "@material-ui/icons/Home";
import IconButton from "@material-ui/core/IconButton";

import { checkColorType } from "../../utils/utils";
import ImageAvatar from "../ImageAvatars";
import TitleSideBar from "../TitleSideBar";

import * as S from "./styled";

const SideBar = () => {
  const information = useSelector((state) => state.hoverCard);

  return (
    <S.StyledDrawer variant="permanent">
      <S.ContainerDrawer>
        <List>
          <S.StyledItemList>
            <Link to="/" style={{ textDecoration: "none" }}>
              <IconButton size="medium">
                <HomeIcon />
              </IconButton>
            </Link>
          </S.StyledItemList>
          {information.info && (
            <>
              <TitleSideBar text="NOME" />
              <ListItem>
                <S.StyledButton size="medium" color="primary">
                  {information.info.name}
                </S.StyledButton>
              </ListItem>
              <TitleSideBar text="DESCRIÇÃO" />
              <ListItem>
                <S.StyledButton size="medium" color="primary">
                  {information.info.classification}
                </S.StyledButton>
              </ListItem>
              <TitleSideBar text="TIPOS" />
              {information.info.types.map((el) => (
                <ListItem key={uuidv4()}>
                  <S.StyledButton
                    backcolor={checkColorType(el.toUpperCase())}
                    size="medium"
                  >
                    {el}
                  </S.StyledButton>
                </ListItem>
              ))}
              {information.info.evolutions && <TitleSideBar text="EVOLUÇÕES" />}
              {information.info.evolutions &&
                information.info.evolutions.map((el) => (
                  <React.Fragment key={uuidv4()}>
                    <>→</>
                    <ImageAvatar
                      key={uuidv4()}
                      name={el.name}
                      image={el.image}
                    />
                  </React.Fragment>
                ))}
              <TitleSideBar text="FRAQUEZAS" />
              {information.info.weaknesses.map((el) => (
                <ListItem key={uuidv4()}>
                  <S.StyledButton
                    backcolor={checkColorType(el.toUpperCase())}
                    size="medium"
                  >
                    {el}
                  </S.StyledButton>
                </ListItem>
              ))}
              <TitleSideBar text="RESISTENCIAS" />
              {information.info.resistant.map((el) => (
                <ListItem key={uuidv4()}>
                  <S.StyledButton
                    backcolor={checkColorType(el.toUpperCase())}
                    size="medium"
                  >
                    {el}
                  </S.StyledButton>
                </ListItem>
              ))}
            </>
          )}
        </List>
      </S.ContainerDrawer>
    </S.StyledDrawer>
  );
};

export default SideBar;
