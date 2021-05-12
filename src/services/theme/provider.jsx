import React, { useReducer } from "react";
import {
  createMuiTheme,
  MuiThemeProvider,
  CssBaseline,
} from "@material-ui/core";
import { ThemeContext } from "../../context";
import { reducer } from "./reducer";
import { THEMES } from "../../config/theme";

export const ThemeLayoutProvider = ({ children }) => {
  const initialState = {
    typeTheme: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const paleta = state.typeTheme ? THEMES[0] : THEMES[1];
  const theme = createMuiTheme({
    palette: {
      type: paleta.name,
      ...paleta.palette,
    },
  });

  // No utilizar on useReducer si esats manejando un state global.
  const changeTypeTheme = (theme) => {
    dispatch({
      type: "SET_CHANGE_THEME",
      payload: theme,
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        changeTypeTheme,
      }}
    >
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <main>{children}</main>
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
