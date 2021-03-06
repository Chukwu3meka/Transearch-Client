import { connect } from "react-redux";
import { useState, useEffect } from "react";

import { Details, History, styles, AddTranContainer } from ".";
import { setDeviceWidthAction, setProfileAction } from "@store/actions";
import API from "@utils/fetcher";

const HomeContainer = (props) => {
  const [lastTransactions, setLastTransactions] = useState([]);
  const [balance, setBalance] = useState(0);
  const [id, setId] = useState(null);
  const [title, setTitle] = useState("ViewCrunch Transearch");

  useEffect(() => {
    if (props.id) getData(props.id);
    if (localStorage && localStorage.Transearch) getData(localStorage.Transearch);
  }, [props.id]);

  const getData = async (id) => {
    await API("post", `company/getCompany`, { id })
      .then((res) => {
        setProfileAction({ id, res });
        setLastTransactions(res.lastTransactions);
        setBalance(res.balance);
        setTitle(res.title);
        setId(id);
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  return (
    <div className={styles.home}>
      <main>
        <Details balance={balance} title={title} />
        <History lastTransactions={lastTransactions} />
      </main>
      <AddTranContainer
        id={id}
        title={title}
        balance={balance}
        setBalance={setBalance}
        lastTransactions={lastTransactions}
        setLastTransactions={setLastTransactions}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
    id: state.profile.id,
    error: state.error,
  }),
  mapDispatchToProps = {
    setDeviceWidthAction,
  };

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
