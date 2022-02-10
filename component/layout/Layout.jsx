import { Header, Footer, Navigation, styles } from ".";

const Layout = ({ pageProps, Component, setAuth }) => (
  <div className={styles.layout}>
    <Header />
    <div className={styles.leftCurve} />
    <div className={styles.rightTriangle} />
    <Component {...pageProps} />
    <Footer />
    <Navigation setAuth={setAuth} />
  </div>
);

export default Layout;
