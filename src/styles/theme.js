import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: `"Yekan-Bakh","Roboto", "Helvetica", "Arial", "sans-serif"`,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontWeightHeavy: 800,
    fontWeightFat: 900,
  },
  direction: "rtl",
});

export default theme;
