"use client";

import {
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material";
import { createContext, useContext } from "react";
import type {} from "@mui/material/themeCssVarsAugmentation";

const AppThemeContext = createContext(null);

export const AppThemeProvider = (props: React.PropsWithChildren<unknown>) => {
  const theme = responsiveFontSizes(
    createTheme({
      cssVariables: {
        colorSchemeSelector: "class",
        disableCssColorScheme: true,
      },
      palette: {
        primary: {
          main: `rgb(10, 18, 42)`,
          contrastText: "rgb(255, 255, 255)",
        },
        secondary: {
          main: `rgb(27, 59, 111)`,
          contrastText: "rgb(255, 255, 255)",
        },
      },
      colorSchemes: {
        light: {
          palette: {
            primary: {
              main: `rgb(10, 18, 42)`,
            },
            secondary: {
              main: `rgb(27, 59, 111)`,
            },
          },
        },
        dark: {
          palette: {
            primary: {
              main: `rgb(10, 18, 42)`,
            },
            secondary: {
              main: `rgb(27, 59, 111)`,
            },
          },
        },
      },
    }),
  );

  return (
    <AppThemeContext.Provider value={null}>
      <ThemeProvider theme={theme} disableTransitionOnChange>
        <CssBaseline enableColorScheme />
        {props.children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  );
};

export const useAppThemeContext = () => useContext(AppThemeContext);

export default AppThemeProvider;
