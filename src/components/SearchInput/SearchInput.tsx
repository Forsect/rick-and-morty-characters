import * as Styles from "./SearchInput.styles";
import { IconButton, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "store";
import services from "store/services";
import { toast, Toaster } from "react-hot-toast";

const SearchInput = () => {
  const searchCharacterName = useSelector(services.selectors.characters.selectSearchCharacterName);
  const dispatch = useDispatch<Dispatch>();

  const onSubmit = () => {
    dispatch(services.actions.characters.setCurrentPage(1));
    dispatch(services.actions.characters.getCharacters({ page: 1, name: searchCharacterName })).then((x) => {
      if (services.actions.characters.getCharacters.rejected.match(x)) {
        toast.error(`Character "${searchCharacterName}" was not found!`, { position: "bottom-center" });
        return;
      }
    });
  };

  const onTextChange = (text: string) => {
    dispatch(services.actions.characters.setSearchCharacterName(text));
  };

  return (
    <Styles.Container elevation={4}>
      <InputBase
        placeholder="Search character"
        onKeyPress={(e) => {
          e.key === "Enter" && onSubmit();
        }}
        value={searchCharacterName}
        onChange={(e) => onTextChange(e.currentTarget.value)}
      />
      <IconButton onClick={onSubmit}>
        <SearchIcon />
      </IconButton>
      <Toaster />
    </Styles.Container>
  );
};

export default SearchInput;
