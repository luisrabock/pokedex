import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLazyQuery, useQuery } from "@apollo/react-hooks";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";

import { GET_POKEMON, GET_POKEMONS } from "../../graphql/queries";

import allActions from "../../actions";

import * as S from "./styled";

const Search = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTerm(e.target.value);
  };
  const { data } = useQuery(GET_POKEMONS, {
    variables: { first: 50 },
  });

  const [handleLoadSingle] = useLazyQuery(GET_POKEMON, {
    onCompleted: (pok) => {
      if (pok.pokemon === null) {
        dispatch(allActions.dataActions.setNotFound("Pokemon não encontrado"));
      } else {
        dispatch(allActions.dataActions.setData([pok.pokemon]));
      }
    },
  });

  const handleClean = () => {
    dispatch(allActions.dataActions.setData(data.pokemons));
    setTerm("");
  };

  return (
    <S.SearchInput
      placeholder="Busca de pokemons"
      fullWidth
      onChange={handleChange}
      value={term}
      margin="normal"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={() =>
                handleLoadSingle({
                  variables: { name: term },
                })
              }
            >
              <SearchIcon />
            </IconButton>
            <Divider />
            <IconButton onClick={() => handleClean()}>
              <CloseIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      variant="outlined"
    />
  );
};

export default Search;
