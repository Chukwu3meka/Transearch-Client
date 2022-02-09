import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { makeStyles } from "@mui/styles";

import validate from "@utils/validator";
import { sleep, isEmailTaken } from "@utils/clientFuncs";
import API from "@utils/fetcher";
import { setProfileAction } from "@store/actions";
import { connect } from "react-redux";

const AuthContainer = (props) => {
  const { enqueueSnackbar } = useSnackbar();
  const [email, setEmail] = useState("");
  const [authType, setAuthType] = useState("signin");
  const [title, setTitle] = useState("");
  const { setProfileAction, setAuth } = props;

  const [password, setPassword] = useState("");

  const submitHandler = async () => {
    if (!validate("email", email)) return enqueueSnackbar("Email not valid", { variant: "error" });
    if (!validate("text", password)) return enqueueSnackbar("Password not good enough", { variant: "error" });
    if (authType === "signup" && !validate("text", title)) return enqueueSnackbar("Title not valid", { variant: "error" });

    if (authType === "signup") {
      // signinAction
      await API("post", `company/signup`, { title, password, email })
        .then((res) => {
          if (res) {
            enqueueSnackbar("Saved Succesfully", { variant: "success" });
            setAuthType("signin");
          } else {
            throw "Server Error";
          }
        })
        .catch((err) => {
          enqueueSnackbar(err?.response?.data || "Server error", { variant: "error" });
        });
    } else {
      await API("post", `company/signin`, { password, email })
        .then(({ balance, lastTransactions, title, id }) => {
          console.log(title);
          setProfileAction({ balance, lastTransactions, title, id });
          setAuth(true);
          enqueueSnackbar("Logged In", { variant: "success" });
        })
        .catch((err) => {
          enqueueSnackbar("Wrong Details", { variant: "error" });
        });
    }
  };

  return (
    <Dialog open={true}>
      <DialogTitle>Welcome To Transearch</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To use Transearch: An account manager powered by MongoDB ATlas Search, You have to signin/signup.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="email"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
          value={email}
          onChange={(e) => setEmail(e.target.value.toLowerCase())}
        />

        {authType === "signup" ? (
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : null}

        <TextField
          autoFocus
          margin="dense"
          id="password"
          label="Password"
          type="password"
          fullWidth
          variant="standard"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setAuthType(authType === "signin" ? "signup" : "signin")}>
          <u>{authType === "signin" ? "Signup" : "Signin"}</u>
        </Button>
        <Button variant="contained" onClick={submitHandler}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  setProfileAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
