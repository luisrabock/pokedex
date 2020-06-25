import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useQuery } from "@apollo/react-hooks";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import useDebounce from "../../hooks/useDebounce";
import { GET_POKEMON } from "../../graphql/queries";

import allActions from "../../actions";

import * as S from "./styled";

const Search = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const debouncedTerm = useDebounce(term, 300);
  const handleChange = (e) => {
    setTerm(e.target.value);
  };
  const { data } = useQuery(GET_POKEMON, {
    variables: { name: term },
  });
  console.log("data", data);

  useEffect(() => {
    dispatch(allActions.dataActions.setData(data));
  }, [debouncedTerm, data]);
  return (
    <S.SearchInput
      placeholder="Busca de pokemons"
      fullWidth
      onChange={handleChange}
      value={term}
      margin="normal"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      variant="outlined"
    />
  );
};

export default Search;
