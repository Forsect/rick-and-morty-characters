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
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          overflowY: "scroll",
        },
        "*::-webkit-scrollbar": {
          width: 6,
          height: 6,
        },
        "*::-webkit-scrollbar-thumb": {
          borderRadius: 10,
          "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,.3)",
          backgroundColor: "#aaa",
        },
      },
    },
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
