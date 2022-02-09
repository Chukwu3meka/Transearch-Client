import { Transactions } from "@component/Transaction";
import { Button, Paper, Typography } from "@mui/material";

import TextField from "@mui/material/TextField";
import API from "@utils/fetcher";
import { useState } from "react";
import { styles } from ".";

const Search = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const searchHandler = async () => {
    // searchTransaction
    // setSearchPhrase(value);
    // console.log(searchPhrase);
    // console.log(new Date(value).toDateString());

    await API("post", `transaction/searchTransaction`, { searchPhrase })
      .then((res) => {
        if (res) setSearchResult(res);

        // enqueueSnackbar("Saved Succesfully", { variant: "success" });
        // setTitle("");
        // setAmount(0);
        // setDescription("");
        // setCredit(true);
        // setLastTransactions([
        //   {
        //     credit,
        //     title,
        //     description,
        //     balance: credit ? balance + amount : balance - amount,
        //     amount,
        //   },
        //   lastTransactions[0],
        // ]);
        // setBalance(credit ? balance + amount : balance - amount);
      })
      .catch((err) => {
        console.log(err);
        throw "Server failed to process data";
      });
  };

  return (
    <Paper className={styles.search}>
      <div>
        <TextField
          label="Search Transactions"
          placeholder="Search Transactions..."
          variant="filled"
          size="small"
          fullWidth
          value={searchPhrase}
          onChange={({ target: { value } }) => setSearchPhrase(value)}
        />
        {/* chukwuemekaTransearch */}
        <Button size="large" variant="contained" onClick={searchHandler}>
          Search
        </Button>
      </div>
      <Typography variant="body2" fontSize={13} color="ActiveCaption">
        Search Result powered by Atlas Search
      </Typography>

      <Transactions transactions={searchResult} />
    </Paper>
  );
};

export default Search;
