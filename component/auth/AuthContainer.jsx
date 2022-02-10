import { useState } from "react";
import { connect } from "react-redux";
import { useSnackbar } from "notistack";

import { Auth } from ".";
import API from "@utils/fetcher";
import validate from "@utils/validator";
import { setProfileAction } from "@store/actions";

const AuthContainer = (props) => {
  const { setProfileAction, setAuth } = props,
    [email, setEmail] = useState("maduekwepedro@gmail.com"),
    [title, setTitle] = useState(""),
    { enqueueSnackbar } = useSnackbar(),
    [password, setPassword] = useState("72373746"),
    [authType, setAuthType] = useState("signin");

  const submitHandler = async () => {
    if (authType === "signup") {
      if (!validate("email", email)) return enqueueSnackbar("Email not valid", { variant: "error" });
      if (!validate("text", password)) return enqueueSnackbar("Password not good enough", { variant: "error" });
      if (!validate("text", title)) return enqueueSnackbar("Title not valid", { variant: "error" });

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
      // if authtype === signin
      if (!validate("email", email) || !validate("text", password))
        return enqueueSnackbar("Email/Password is incorrect", { variant: "error" });

      await API("post", `company/signin`, { password, email })
        .then((id) => {
          setProfileAction({ id });
          setAuth(true);
          enqueueSnackbar("Logged In", { variant: "success" });
        })
        .catch((err) => {
          enqueueSnackbar("Wrong Details", { variant: "error" });
        });
    }
  };

  const inputHandler = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    switch (id) {
      case "email":
        setEmail(value.toLowerCase());
        break;
      case "password":
        setPassword(value);
        break;
      default:
        setTitle(value);
        break;
    }
  };

  return <Auth {...{ email, title, authType, password, setAuthType, inputHandler, submitHandler }} />;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  setProfileAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
