import React from "react";
import propTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import allActions from "../../actions";

import * as S from "./styled";

const Card = ({
  image,
  name,
  classification,
  types,
  evolutions,
  weaknesses,
  resistant,
}) => {
  const dispatch = useDispatch();
  const handleHover = (e) => {
    e.preventDefault();
    dispatch(
      allActions.hoverActions.onHoverCard({
        name,
        classification,
        types,
        evolutions,
        weaknesses,
        resistant,
      })
    );
    dispatch(allActions.counterActions.increment());
  };
  return (
    <S.CardContainer>
      <CardActionArea onMouseOver={(e) => handleHover(e)}>
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
            types.map((type) => (
              <Typography
                key={type}
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
        <Link to={`/pokemon/${name}`} style={{ textDecoration: "none" }}>
          <Button size="small" color="primary" variant="contained">
            Detalhes
          </Button>
        </Link>
        <Button size="small" color="primary" variant="contained">
          Editar
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
  evolutions: propTypes.instanceOf(Array),
  weaknesses: propTypes.instanceOf(Array),
  resistant: propTypes.instanceOf(Array),
};

Card.defaultProps = {
  evolutions: [],
  weaknesses: [],
  resistant: [],
};

export default Card;
