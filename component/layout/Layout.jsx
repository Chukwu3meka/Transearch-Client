import Head from "next/head";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import { useState, useEffect, useRef } from "react";

import theme from "@source/theme";
import { Header, Footer, Navigation, styles } from ".";
import { setDeviceWidthAction } from "@store/actions";

const Layout = ({ pageProps, Component, store }) => {
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
      <Provider store={store}>
        <SnackbarProvider maxSnack={1} preventDuplicate>
          <div className={styles.leftCurve} />
          <div className={styles.layout}>
            <Header />
            <Component {...pageProps} />
            <Footer />
            <Navigation />
          </div>
        </SnackbarProvider>
      </Provider>
    </>
  );
};

export default Layout;
