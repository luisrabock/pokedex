import React from "react";
import { useParams } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMON } from "../../graphql/queries";

import AtacksBar from "../Progress";

import * as S from "./styled";

const Content = () => {
  const { name } = useParams();

  const { data } = useQuery(GET_POKEMON, {
    variables: { name },
  });

  return (
    <S.Container>
      <Paper
        elevation={3}
        style={{
          padding: "10px",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {data && (
          <>
            <S.ContainerDetails>
              <Typography gutterBottom variant="h3" component="h2">
                {data.pokemon.name}
              </Typography>
              <img src={data.pokemon.image} alt="Logo" />
              <Typography gutterBottom variant="h6" component="h2">
                {data.pokemon.classification}
              </Typography>
              {data.pokemon.types &&
                data.pokemon.types.map((type) => (
                  <Typography
                    key={type}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {type}
                  </Typography>
                ))}
            </S.ContainerDetails>
            <S.ContainerDetails>
              <Typography gutterBottom variant="h3" component="h2">
                Ataques
              </Typography>
              {data.pokemon.attacks.special.map((attack) => (
                <>
                  <AtacksBar value={attack.damage / 10} type={attack.type} />
                  <Typography gutterBottom variant="h6" component="h2">
                    {attack.name}
                  </Typography>
                </>
              ))}
            </S.ContainerDetails>
          </>
        )}
      </Paper>
    </S.Container>
  );
};

export default Content;
