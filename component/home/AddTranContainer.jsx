import { Button, Paper, Typography } from "@mui/material";
import { styles } from ".";
import { useSnackbar } from "notistack";

import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import fetcher from "@utils/fetcher";
import API from "@utils/fetcher";
// import { fetcher } from "@utils/clientFuncs";

const AddTran = ({ balance, setBalance, name, setLastTransactions, lastTransactions }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [credit, setCredit] = useState(true);

  const onChangeHandler = (e) => {
    const entry = e.target.id;
    const value = e.target.value;

    switch (entry) {
      case "title":
        setTitle(value);
        break;
      case "amount":
        const reg = /^\s*[+-]?(\d+|\.\d+|\d+\.\d+|\d+\.)(e[+-]?\d+)?\s*$/;
        // if (reg.test(value.replace(/,/g, ""))) {
        if (reg.test(value)) {
          setAmount(parseInt(value));
        } else if (!value) {
          setAmount(0);
        } else {
          enqueueSnackbar("Only numbers allowed as amount", { variant: "error" });
        }
        break;
      case "desc":
        setDescription(value);
        break;
      default:
        setCredit(value);
        break;
    }
  };

  const submitHandler = async () => {
    try {
      if (title && title.length) {
        if (amount) {
          await API("post", `transaction/addTransaction`, { title, amount, description, credit, balance, name })
            .then((res) => {
              enqueueSnackbar("Saved Succesfully", { variant: "success" });
              setTitle("");
              setAmount(0);
              setDescription("");
              setCredit(true);
              setLastTransactions([
                {
                  credit,
                  title,
                  description,
                  balance: credit ? balance + amount : balance - amount,
                  amount,
                },
                lastTransactions[0],
              ]);

              setBalance(credit ? balance + amount : balance - amount);
            })
            .catch((err) => {
              throw "Server failed to process data";
              // console.log(err);
            });
        } else {
          enqueueSnackbar("Amount is required", { variant: "error" });
        }
      } else {
        enqueueSnackbar("Title Field is required", { variant: "error" });
      }
    } catch (error) {
      enqueueSnackbar("Failed to save", { variant: "error" });
    }
  };

  return "<AddTran />;";
  // return <AddTran / >;
};

export default AddTran;
