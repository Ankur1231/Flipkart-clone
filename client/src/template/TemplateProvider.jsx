import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import { createContext } from "react";

const TemplateContext = createContext(null);

const TemplateProvider = ({ children }) => {
  const theme = createMuiTheme({
    overrides: {
      MuiDialog: {
        paperWidthSm: {
          maxWidth: "unset",
        },
      },
      MuiDialogContent: {
        root: {
          padding: 0,
          "&:first-child": {
            paddingTop: 0,
          },
        },
      },
    },
  });

  return (
    <TemplateContext.Provider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </TemplateContext.Provider>
  );
};

export default TemplateProvider;
