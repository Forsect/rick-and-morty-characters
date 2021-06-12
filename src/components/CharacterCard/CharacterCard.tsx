import * as Types from "./CharacterCard.types";
import * as Styles from "./CharacterCard.styles";
import { Typography, Grow } from "@material-ui/core";
import { useState } from "react";

const CharacterCard = ({ character }: Types.Props) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Grow timeout={500} in={isLoaded} disableStrictModeCompat>
      <Styles.CharacterTooltip title={character.name}>
        <Styles.Card elevation={4}>
          <Styles.Avatar src={character.image} alt="Rick and Morthy" onLoad={() => setIsLoaded(true)} />
          <Styles.Info>
            <Styles.Bold variant="h6">{character.name}</Styles.Bold>
            <Typography>{character.species}</Typography>
          </Styles.Info>
        </Styles.Card>
      </Styles.CharacterTooltip>
    </Grow>
  );
};

export default CharacterCard;
