import { CircularProgress } from "@material-ui/core";
import * as Styles from "./LoadingScreen.styles";

const LoadingScreen = () => {
  return (
    <Styles.Container>
      <CircularProgress size={64} thickness={6} />
    </Styles.Container>
  );
};

export default LoadingScreen;
