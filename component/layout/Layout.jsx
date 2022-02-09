import { Header, Footer, Navigation, styles } from ".";

const Layout = ({ pageProps, Component, setAuth }) => (
  <div className={styles.layout}>
    <Header />
    <div className={styles.leftCurve} />
    <div className={styles.rightTriangle} />
    <Component {...pageProps} />
    <Footer setAuth={setAuth} />
    <Navigation />
  </div>
);

export default Layout;
