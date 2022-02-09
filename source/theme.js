import { createTheme } from "@mui/material/styles";

const muiTheme = createTheme({
  typography: {
    fontFamily: "'Playfair Display', serif",
    allVariants: {
      color: "wheat",
    },
  },

  palette: {
    primary: {
      main: "rgb(93, 68, 139)",
    },
    secondary: {
      main: "rgb(188, 141, 202)",
    },
    info: {
      main: "#1197c0",
    },
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "wheat",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: 5,
          boxSizing: "border-box",
        },
      },
    },
  },
});

export default muiTheme;
