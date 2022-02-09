import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Auth = ({ email, title, authType, password, setAuthType, inputHandler, submitHandler }) => (
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
        onChange={inputHandler}
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
          onChange={inputHandler}
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
        onChange={inputHandler}
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

export default Auth;
