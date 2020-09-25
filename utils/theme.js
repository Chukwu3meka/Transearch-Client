import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import red from "@material-ui/core/colors/red";
import green from "@material-ui/core/colors/green";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgb(255, 150, 40)",
    },
    secondary: {
      main: "rgb(35, 15, 155)",
      contrastText: "#fff",
    },
    success: {
      main: green.A400,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
    spacing: 24,
  },
});

// MUI overide here
const globalTheme = createMuiTheme(
  {
    overrides: {
      MuiPaper: {
        root: {
          margin: 5,
          padding: 5,
          boxSizing: "border-box",
          cursor: "pointer",
        },
        rounded: {
          borderRadius: 5,
        },
      },
      MuiTable: {
        root: {
          minWidth: 300,
        },
      },
      MuiTableCell: {
        head: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        body: {
          fontSize: 14,
        },
      },
      MuiTableRow: {
        root: {
          "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
      MuiGrid: {
        root: {
          alignItems: "center",
          justifyContent: "center",
        },
      },
    },
  },
  theme
);

export default globalTheme;
