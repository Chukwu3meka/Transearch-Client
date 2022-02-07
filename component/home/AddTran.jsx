import { Button, Paper, Typography } from "@mui/material";
import { styles } from ".";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";

import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight: personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
  };
}

const AddTran = () => {
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);

  return (
    <Paper className={styles.addTran}>
      <Typography variant="body2" fontSize={13} color="ActiveCaption">
        Add Transaction
      </Typography>
      <TextField id="Title of transaction" label="Outlined" variant="outlined" fullWidth />
      <TextField id="Amoun" label="Outlined" variant="outlined" fullWidth />
      <TextField
        multiline
        fullWidth
        // value={content}
        id="Description"
        label="Description"
        // onChange={handleContentChange}
        placeholder="Start typing here"
        inputProps={{ style: { height: "130px" } }}
      />
      <div>
        <FormControl fullWidth size="small">
          <Select
            multiple
            displayEmpty
            value={personName}
            // onChange={handleChange}
            input={<OutlinedInput />}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <em>Placeholder</em>;
              }

              return selected.join(", ");
            }}
            MenuProps={MenuProps}
            inputProps={{ "aria-label": "Without label" }}>
            <MenuItem disabled value="">
              <em>Placeholder</em>
            </MenuItem>
            <MenuItem value="credit">Credit Transaction</MenuItem>
            <MenuItem value="debit">Debit Transaction</MenuItem>
          </Select>
        </FormControl>
        <Button color="secondary" variant="contained" fullWidth>
          Save Transaction
        </Button>
      </div>
    </Paper>
  );
};

export default AddTran;
