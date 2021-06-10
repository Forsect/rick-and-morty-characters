import { CircularProgress } from "@material-ui/core";
import * as Styles from "./LoadingScreen.styles";

const LoadingScreen = () => {
  return (
    <Styles.Container>
      <CircularProgress />
    </Styles.Container>
  );
};

export default LoadingScreen;
