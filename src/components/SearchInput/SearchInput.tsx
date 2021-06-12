import * as Styles from "./SearchInput.styles";
import { IconButton, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "store";
import services from "store/services";

const SearchInput = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch<Dispatch>();

  const onSubmit = () => {
    dispatch(services.actions.characters.setSearchCharacterName(searchText));
  };

  return (
    <Styles.Container elevation={4}>
      <InputBase
        placeholder="Search character"
        onKeyPress={(e) => {
          e.key === "Enter" && onSubmit();
        }}
        onChange={(e) => setSearchText(e.currentTarget.value)}
      />
      <IconButton onClick={onSubmit}>
        <SearchIcon />
      </IconButton>
    </Styles.Container>
  );
};

export default SearchInput;
