import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";

export const CardContainer = styled(Card)`
  width: 315px;
  margin: 30px;
  border-radius: 15;
  text-align: center;
`;

export const CardMediaStyled = styled(CardMedia)`
  object-fit: contain;
`;

export const ActionsContainer = styled(CardActions)`
  justify-content: center;
`;
