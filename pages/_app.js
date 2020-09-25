import "@scss/index.scss";
import Head from "next/head";
import Router from "next/router";
import theme from "@utils/theme";
import { useEffect } from "react";
import PropTypes from "prop-types";
import * as gtag from "@utils/gtag";
import { Provider } from "react-redux";
import "slick-carousel/slick/slick.css";
import { useStore } from "@store/index";
import config from "react-reveal/globals";
import Layout from "@component/layout/index";
import "slick-carousel/slick/slick-theme.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";

export default function MyApp({ Component, pageProps }) {
  config({ ssrFadeout: true });
  const store = useStore(pageProps.initialReduxState);

  useEffect(() => {
    let mounted = true;
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) jssStyles.parentElement.removeChild(jssStyles);
    // google analytics
    Router.events.on("routeChangeComplete", (url) => gtag.pageview(url));
    return () => {
      mounted = false;
      Router.events.off("routeChangeComplete", (url) => gtag.pageview(url));
    };
  }, []);

  return (
    <>
      <Head>
        <title>NextJs starter</title>
        <meta name="description" content="PedroView NextJs starter blog" />
        <meta name="keywords" content="nextjs" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </ThemeProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
