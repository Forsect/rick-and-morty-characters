import { ThemeProvider } from "@material-ui/styles";
import * as Types from "./MaterialProvider.types";
import * as Styles from "./MaterialProvider.styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    button: {
      textTransform: "none",
    },
  },
  palette: {
    primary: {
      main: "#f9f56d",
    },
    background: { default: "#97d4d5" },
  },
});

const MaterialProvider = ({ children }: Types.Props) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Styles.PageContainer>{children}</Styles.PageContainer>
    </ThemeProvider>
  );
};

export default MaterialProvider;
