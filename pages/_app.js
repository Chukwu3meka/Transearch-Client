import PropTypes from "prop-types";
import { useEffect } from "react";

import { useStore } from "@store/index";
import LayoutContainer from "@component/layout";

const App = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) jssStyles.parentElement.removeChild(jssStyles);
  }, []);

  return <LayoutContainer {...{ pageProps, Component, store }} />;
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default App;
