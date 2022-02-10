import { connect } from "react-redux";
import { Paper } from "@mui/material";

import TextField from "@mui/material/TextField";
import API from "@utils/fetcher";
import { useEffect, useState } from "react";
import { styles, Search, Transactions } from ".";

const TransactionsContainer = (props) => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [id, setId] = useState(props.id);

  useEffect(() => {
    if (props.id && !id) setId(props.id);
  }, [props.id]);

  useEffect(() => {
    fetchTransWithoutSearchPhrase(localStorage.Transearch);
  }, []);

  const fetchTransWithoutSearchPhrase = async (id) => {
    await API("post", `transaction/defaultSearchTransaction`, { searchPhrase, company: id })
      .then((res) => {
        if (res) setSearchResult(res);
      })
      .catch((err) => {
        // console.log(err);
        throw "Server failed to process data";
      });
  };

  const fetchTransWithSearchPhrase = async (id) => {
    await API("post", `transaction/atlasSearchTransaction`, { searchPhrase, company: id })
      .then((res) => {
        if (res) setSearchResult(res);
      })
      .catch((err) => {
        // console.log(err);
        throw "Server failed to process data";
      });
  };

  const searchHandler = () => {
    if (searchPhrase.length) return fetchTransWithSearchPhrase(id);
    fetchTransWithoutSearchPhrase(id);
  };

  return (
    <Paper className={styles.transactions}>
      <Search searchPhrase={searchPhrase} setSearchPhrase={setSearchPhrase} searchHandler={searchHandler} />
      <Transactions transactions={searchResult} />
    </Paper>
  );
};

const mapStateToProps = (state) => ({
    id: state.profile.id,
    error: state.error,
  }),
  mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsContainer);
