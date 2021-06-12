import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles";
import { ThemeProvider } from "styled-components";
import * as Types from "./MaterialProvider.types";
import * as Styles from "./MaterialProvider.styles";
import CssBaseline from "@material-ui/core/CssBaseline";
// use in production
// import { createMuiTheme } from "@material-ui/core";

// use in development
import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core";

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
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Styles.PageContainer>{children}</Styles.PageContainer>
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

export default MaterialProvider;
