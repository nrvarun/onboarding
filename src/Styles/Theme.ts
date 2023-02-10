import { createTheme } from "@mui/material/styles";

import type {} from '@mui/x-date-pickers/themeAugmentation';
  
export const HIKI_THEME = createTheme({
    typography: {
      fontFamily: "Mulish",
      button: {
        textTransform: "capitalize",
      },
    },
    components: {
      MuiDatePicker: {
        styleOverrides: {
          root: {
            backgroundColor: '#0052CC',
          },
        },
      },
      MuiSwitch: {
        styleOverrides: {
          root: {
            width: 60,
            height: 44,
          },
          switchBase: {
            top: 3
          },
          track: {
            borderRadius: 10
          }
        }
      },
      MuiInputBase: {
          styleOverrides: {
              // Name of the slot
              root: {
                  border: '1px solid rgba(136, 136, 136, 0.4)',
                  borderRadius: '8px !important'
              },
              input: {
                // Some CSS
                padding: '12px 16px !important',
              //   border: 0
              },
            },
      },
    }
  });