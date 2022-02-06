import Head from "next/head";
import { connect } from "react-redux";
import { Provider } from "react-redux";
import { useState, useEffect, useRef } from "react";

import theme from "@source/theme";
import { Details, styles } from ".";
import { setDeviceWidthAction } from "@store/actions";

const HomeContainer = ({}) => {
  return (
    <div className={styles.home}>
      <Details />
    </div>
  );
};

const mapStateToProps = (state) => ({
    error: state.error,
  }),
  mapDispatchToProps = {
    setDeviceWidthAction,
  };

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
