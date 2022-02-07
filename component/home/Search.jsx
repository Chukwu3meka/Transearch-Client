import { Button, Paper, Typography } from "@mui/material";

import TextField from "@mui/material/TextField";
import { useState } from "react";
import { styles } from ".";

const Search = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const searchHandler = (e) => {
    const value = e.target.value;
    setSearch(value);
    console.log("searchHandler");
  };

  return (
    <Paper className={styles.search}>
      <TextField
        label="Search Transactions"
        placeholder="Search Transactions..."
        variant="filled"
        fullWidth
        value={search}
        onChange={searchHandler}
      />

      <Typography variant="body2" fontSize={13} color="ActiveCaption">
        Search Result{" "}
      </Typography>
    </Paper>
  );
};

export default Search;
