import { connect } from "react-redux";
import { useSnackbar } from "notistack";
import { logoutAction } from "@store/actions";
import { Button, Typography } from "@mui/material";

const Footer = ({ setAuth, logoutAction }) => {
  const { enqueueSnackbar } = useSnackbar();
  const logoutHandler = () => {
    setAuth(false);
    logoutAction();
    enqueueSnackbar("Logged out", { variant: "info" });
  };

  return (
    <footer>
      <Button variant="outlined" onClick={logoutHandler}>
        Logout
      </Button>
      <Typography variant="body2" color="textSecondary">
        Inspired with ♥ by <b>MongoDB Atlas Search</b>
      </Typography>
    </footer>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  logoutAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
