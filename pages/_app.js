import Head from "next/head";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import { useState, useEffect } from "react";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import theme from "@source/theme";
import Layout from "@component/layout";
import { useStore } from "@store/index";
import AuthContainer from "@component/auth/AuthContainer";
import createEmotionCache from "@source/createEmotionCache";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const App = ({ Component, emotionCache = clientSideEmotionCache, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) jssStyles.parentElement.removeChild(jssStyles);

    setAuth(localStorage ? (localStorage.Transearch ? true : false) : false);
  }, []);

  return (
    <>
      <Head>
        <title>Transearch</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content={theme.palette.primary.main} />
        <meta property="og:url" content="https://www.transearch.vercel.app/" />
        <meta name="keywords" content="Transearch, view" />
        <meta httpEquiv="Content-Type" content="text/html; charSet=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Transearch: Banking app" />
        <meta property="og:title" content="Transearch" />
        <meta property="og:description" content="Transearch: Banking app" />
      </Head>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Provider store={store}>
            <SnackbarProvider maxSnack={1} preventDuplicate>
              {/* check if user is auth */}
              {auth ? <Layout {...{ pageProps, Component, store, setAuth }} /> : <AuthContainer setAuth={setAuth} />}
            </SnackbarProvider>
          </Provider>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
};

export default App;

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
