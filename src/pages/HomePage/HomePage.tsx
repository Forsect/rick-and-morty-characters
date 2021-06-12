import * as Styles from "./HomePage.styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "store";
import services from "store/services";
import Pagination from "@material-ui/lab/Pagination";
import CharacterCard from "components/CharacterCard";
import SearchInput from "components/SearchInput";

const HomePage = () => {
  const pagesAmount = useSelector(services.selectors.characters.selectPagesAmount);
  const selectedPage = useSelector(services.selectors.characters.selectCurrentPage);
  const characters = useSelector(services.selectors.characters.selectCharacters);
  const searchCharacterName = useSelector(services.selectors.characters.selectSearchCharacterName);
  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    dispatch(services.actions.characters.getCharacters({ page: selectedPage, name: searchCharacterName }));
    // eslint-disable-next-line
  }, [selectedPage]);

  const selectPage = (page: number) => {
    dispatch(services.actions.characters.setCurrentPage(page));
  };

  return (
    <Styles.Container>
      <SearchInput />
      <Styles.Cards>
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </Styles.Cards>
      <Pagination
        size="large"
        count={pagesAmount}
        page={selectedPage}
        onChange={(_, page) => selectPage(page)}
        color="primary"
      />
    </Styles.Container>
  );
};

export default HomePage;
