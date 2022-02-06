import PropTypes from "prop-types";
import { useEffect } from "react";

import Layout from "@component/layout";
import { useStore } from "@store/index";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "@source/theme";
import createEmotionCache from "@source/createEmotionCache";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const App = ({ Component, emotionCache = clientSideEmotionCache, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) jssStyles.parentElement.removeChild(jssStyles);
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Layout {...{ pageProps, Component, store }} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
