import React, { useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { useDispatch, useSelector } from "react-redux";

import SearchInput from "../Search";
import Card from "../Card/index";

import { GET_POKEMONS } from "../../graphql/queries";
import allActions from "../../actions";

import * as S from "./styled";

const Content = () => {
  const dispatch = useDispatch();
  const { data } = useQuery(GET_POKEMONS, {
    variables: { first: 50 },
  });
  const pokemonsArr = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(allActions.dataActions.setData(data));
  }, [data]);

  let arr = null;
  if (pokemonsArr.data) {
    arr = pokemonsArr.data.pokemons ? pokemonsArr.data.pokemons : null;
    if (!arr)
      arr = pokemonsArr.data.pokemon ? [pokemonsArr.data.pokemon] : null;
  }
  return (
    <S.Container>
      <SearchInput />
      {arr &&
        arr.map((pok) => (
          <S.ContainerCard key={pok.id}>
            <Card
              image={pok.image}
              name={pok.name}
              classification={pok.classification}
              types={pok.types}
              evolutions={pok.evolutions}
              weaknesses={pok.weaknesses}
              resistant={pok.resistant}
            />
          </S.ContainerCard>
        ))}
    </S.Container>
  );
};

export default Content;
