import { createTheme } from "@mui/material/styles";

const color = "#424242";
const background = "#fffffa ";

const muiTheme = createTheme({
  typography: {
    fontFamily: "'Playfair Display', serif",

    allVariants: {
      color,
    },
  },

  palette: {
    text: {
      primary: color,
      secondary: "#7E7C7C",
    },
    primary: {
      main: "#e2ad26",
    },
    secondary: {
      main: "#1197c0",
    },
    info: {
      main: "#424242",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          color,
          padding: 5,
          boxSizing: "border-box",
          // cursor: "pointer",
          background,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color,
        },
      },
    },
  },
});

export default muiTheme;
