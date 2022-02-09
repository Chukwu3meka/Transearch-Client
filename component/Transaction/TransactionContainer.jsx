import Head from "next/head";
import { connect } from "react-redux";
import { Provider } from "react-redux";
import { useState, useEffect, useRef } from "react";

import theme from "@source/theme";
import { Details, History, styles, AddTran, Search } from ".";
import { setDeviceWidthAction } from "@store/actions";
import API from "@utils/fetcher";

const HomeContainer = () => {
  // console.log(isConnected);

  return (
    <Paper>
      <Typography variant="body2" fontSize={13} color="ActiveCaption">
        Transaction History
      </Typography>
      <History lastTransactions={lastTransactions} />
    </Paper>
  );
};

const mapStateToProps = (state) => ({
    error: state.error,
  }),
  mapDispatchToProps = {
    setDeviceWidthAction,
  };

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
