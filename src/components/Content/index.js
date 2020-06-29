import React, { useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { useDispatch, useSelector } from "react-redux";

import SearchInput from "../Search";
import Card from "../Card/index";
import Toaster from "../Toaster/index";
import Modal from "../Modal";
import Spinner from "../Spinner";

import { GET_POKEMONS } from "../../graphql/queries";
import allActions from "../../actions";

import * as S from "./styled";

const Content = () => {
  const dispatch = useDispatch();

  const { data } = useQuery(GET_POKEMONS, {
    variables: { first: 50 },
  });
  const handleClose = () => {
    dispatch(allActions.ModalActions.close());
  };

  const pokemonsArr = useSelector((state) => state.data);
  const { open } = useSelector((state) => state.modal);
  useEffect(() => {
    if (data) dispatch(allActions.dataActions.setData(data.pokemons));
  }, [data]);

  return (
    <S.Container>
      <Modal open={open} handleClose={handleClose} />
      <SearchInput />
      {pokemonsArr.error && (
        <Toaster open={!!pokemonsArr.error} message="Pokemon não encontrado" />
      )}
      {pokemonsArr.length === 0 && <Spinner />}
      {pokemonsArr.data &&
        pokemonsArr.data.map((pok) => (
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
