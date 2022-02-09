import Head from "next/head";
import { connect } from "react-redux";
import { Provider } from "react-redux";
import { useState, useEffect, useRef } from "react";

import theme from "@source/theme";
import { Details, History, styles, AddTran, Search, AddTranContainer } from ".";
import { setDeviceWidthAction } from "@store/actions";
import API from "@utils/fetcher";

const HomeContainer = () => {
  // console.log(isConnected);

  const [lastTransactions, setLastTransactions] = useState([]);
  const [balance, setBalance] = useState(0);
  const [name, setName] = useState("ViewCrunch");

  useEffect(() => {
    const getData = async () => {
      await API("post", `company/getCompany`, { name })
        .then((res) => {
          setLastTransactions(res.lastTransactions);
          setBalance(res.balance);
        })
        .catch((err) => {
          // console.log(err);
        });
    };

    getData();
  }, []);

  return (
    <div className={styles.home}>
      <main>
        <Details balance={balance} name={name} />
        <History lastTransactions={lastTransactions} />
      </main>
      <AddTranContainer
        balance={balance}
        setBalance={setBalance}
        name={name}
        setLastTransactions={setLastTransactions}
        lastTransactions={lastTransactions}
      />
      {/* <Search /> */}
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
