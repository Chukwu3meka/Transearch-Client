import { styles } from ".";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";

const Search = ({ searchHandler, searchPhrase, setSearchPhrase }) => (
  <div className={styles.search}>
    <div>
      <TextField
        label="Search Transactions"
        placeholder="start typing..."
        variant="filled"
        size="small"
        fullWidth
        value={searchPhrase}
        onChange={({ target: { value } }) => setSearchPhrase(value)}
      />
      <Button size="large" variant="contained" onClick={searchHandler}>
        Search
      </Button>
    </div>
    <Typography variant="body2" fontSize={13} color="ActiveCaption">
      Search Result powered by Atlas Search
    </Typography>
  </div>
);

export default Search;
