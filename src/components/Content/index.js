import React from "react";
import { useQuery } from "@apollo/react-hooks";

import SearchInput from "../Search";

import Card from "../Card/index";

import { GET_POKEMONS } from "../../graphql/queries";

import * as S from "./styled";

const Content = () => {
  const { data } = useQuery(GET_POKEMONS, {
    variables: { first: 50 },
  });

  return (
    <S.Container>
      <SearchInput />
      {data &&
        data.pokemons.map((pok) => (
          <S.ContainerCard key={pok.id}>
            <Card
              image={pok.image}
              name={pok.name}
              classification={pok.classification}
              types={pok.types}
            />
          </S.ContainerCard>
        ))}
    </S.Container>
  );
};

export default Content;
