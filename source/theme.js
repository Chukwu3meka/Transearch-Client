import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: '"Merienda", cursive',
  },
  palette: {
    primary: {
      main: "rgb(68, 139, 68)",
    },
    secondary: {
      main: "rgb(141, 202, 141)",
    },
    spacing: 24,
  },
});

const globalTheme = createTheme(
  {
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            overflow: "hidden",
            margin: "10px auto",
            boxSizing: "border-box",
          },
          rounded: {
            borderRadius: 5,
          },
        },
      },
    },
  },
  theme
);

export default globalTheme;
