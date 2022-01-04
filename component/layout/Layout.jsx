import Head from "next/head";
import { connect } from "react-redux";
import { Provider } from "react-redux";
import { CacheProvider } from "@emotion/react";
import { useState, useEffect, useRef } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import theme from "@source/theme";
import { Header, Footer, styles } from ".";
import { setDeviceWidthAction } from "@store/actions";
import createEmotionCache from "@source/createEmotionCache";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const Layout = ({ pageProps, Component, persistUserAction, emotionCache = clientSideEmotionCache, store, setDeviceWidthAction }) => {
  useEffect(() => {
    setDeviceWidthAction(window.innerWidth);
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>ViewCrunch: Next.Js Starter</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content={theme.palette.primary.main} />
        <meta property="og:url" content="https://www.viewcrunch.com/" />
        <meta name="keywords" content="ViewCrunch, view" />
        <meta httpEquiv="Content-Type" content="text/html; charSet=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="ViewCrunch: Sharing your view" />
        <meta property="og:title" content="ViewCrunch" />
        <meta property="og:description" content="ViewCrunch: Sharing your view" />
      </Head>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CssBaseline />
          <div className={styles.layout}>
            <Header />
            <div>
              <Component {...pageProps} />
            </div>
            <Footer />
          </div>
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  );
};

const mapStateToProps = (state) => ({
    error: state.error,
  }),
  mapDispatchToProps = {
    setDeviceWidthAction,
  };

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
