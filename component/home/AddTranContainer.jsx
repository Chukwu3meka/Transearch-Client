import { AddTran } from ".";
import { useState } from "react";
import API from "@utils/fetcher";
import { useSnackbar } from "notistack";

const AddTransaction = ({ balance, setBalance, name, setLastTransactions, lastTransactions, id }) => {
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
          await API("post", `transaction/addTransaction`, { title, amount, description, credit, balance, name, id })
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

  return <AddTran {...{ title, onChangeHandler, amount, description, credit, submitHandler }} />;
};

export default AddTransaction;
