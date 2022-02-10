import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Button, Paper, Typography } from "@mui/material";

import { styles } from ".";

const AddTran = ({ title, onChangeHandler, amount, description, credit, submitHandler }) => (
  <Paper className={styles.addTran}>
    <Typography variant="body2" fontSize={13} color="ActiveCaption">
      Add Transaction
    </Typography>
    <TextField id="title" label="Title of transaction*" variant="outlined" fullWidth value={title} onChange={onChangeHandler} />
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
    <Button color="secondary" variant="contained" fullWidth onClick={submitHandler}>
      Save Transaction
    </Button>
  </Paper>
);

export default AddTran;
