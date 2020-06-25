import React from "react";
import propTypes from "prop-types";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import * as S from "./styled";

const Card = ({ image, name, classification, types }) => {
  return (
    <S.CardContainer>
      <CardActionArea>
        <S.CardMediaStyled
          component="img"
          alt={name}
          height="140"
          image={image}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="h2">
            {name}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            {classification}
          </Typography>
          {types &&
            types.map((type, index) => (
              <Typography
                key={index}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {type}
              </Typography>
            ))}
        </CardContent>
      </CardActionArea>
      <S.ActionsContainer>
        <Button size="small" color="primary" variant="contained">
          Detalhes
        </Button>
      </S.ActionsContainer>
    </S.CardContainer>
  );
};

Card.propTypes = {
  image: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  classification: propTypes.string.isRequired,
  types: propTypes.instanceOf(Array).isRequired,
};

export default Card;
