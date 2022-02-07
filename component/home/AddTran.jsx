import { Button, Paper, Typography } from "@mui/material";
import { styles } from ".";
import { useSnackbar } from "notistack";

import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { fetcher } from "@utils/clientFuncs";

const AddTran = () => {
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
          const res = await fetcher("/api/addData", JSON.stringify({ title, amount, description, credit }));
          if (res) {
            enqueueSnackbar("Saved Succesfully", { variant: "success" });
            setTitle("");
            setAmount(0);
            setDescription("");
            setCredit(true);
          } else {
            throw "Server failed to process data";
          }
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

  return (
    <Paper className={styles.addTran}>
      <Typography variant="body2" fontSize={13} color="ActiveCaption">
        Add Transaction
      </Typography>
      <TextField id="title" label="Title of transaction*" variant="outlined" fullWidth value={title} onChange={onChangeHandler} />
      <TextField
        id="amount"
        label="Amount*"
        variant="outlined"
        fullWidth
        // value={`${amount.toLocaleString()}`}
        value={amount}
        onChange={onChangeHandler}
      />
      <TextField
        multiline
        fullWidth
        value={description}
        id="desc"
        label="Description"
        onChange={onChangeHandler}
        placeholder="Start typing here"
        inputProps={{ style: { height: "130px" } }}
      />
      <div>
        <FormControl fullWidth size="small">
          <Select
            displayEmpty
            value={credit}
            onChange={onChangeHandler}
            input={<OutlinedInput />}
            inputProps={{ "aria-label": "Transaction type" }}>
            <MenuItem disabled value="">
              <em>Placeholder</em>
            </MenuItem>
            <MenuItem value={true}>Credit Transaction</MenuItem>
            <MenuItem value={false}>Debit Transaction</MenuItem>
          </Select>
        </FormControl>
        <Button color="secondary" variant="contained" fullWidth onClick={submitHandler}>
          Save Transaction
        </Button>
      </div>
    </Paper>
  );
};

export default AddTran;
