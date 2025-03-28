'use client'

import { createTheme } from '@mui/material/styles';

import { responsiveFontSizes } from '@mui/material/styles';

export const theme = () => {
    return responsiveFontSizes(createTheme({
        cssVariables: {
            colorSchemeSelector: "class",
            disableCssColorScheme: true
        },
        palette: {
            primary: {
                main: `rgb(10, 18, 42)`,
                contrastText: 'rgb(255, 255, 255)',
            },
            secondary: {
                main: `rgb(27, 59, 111)`,
                contrastText: 'rgb(255, 255, 255)',
            }
        },
        colorSchemes: {
            light: {
                palette: {
                    primary: {
                        main: `rgb(10, 18, 42)`,
                    },
                    secondary: {
                        main: `rgb(27, 59, 111)`,
                    }
                }
            },
            dark: {
                palette: {
                    primary: {
                        main: `rgb(10, 18, 42)`,
                    },
                    secondary: {
                        main: `rgb(27, 59, 111)`,
                    }
                }
            }
        }
    }))
}


