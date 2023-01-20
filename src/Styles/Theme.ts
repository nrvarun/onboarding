import { createTheme } from "@mui/material/styles";


  
export const HIKI_THEME = createTheme({
    typography: {
      fontFamily: "Mulish",
      button: {
        textTransform: "capitalize",
      },
    },
    components: {
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
        }
    }
  });