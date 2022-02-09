import { Header, Footer, Navigation, styles } from ".";

const Layout = ({ pageProps, Component }) => (
  <div className={styles.layout}>
    <Header />
    <div className={styles.leftCurve} />
    <div className={styles.rightTriangle} />
    <Component {...pageProps} />
    <Footer />
    <Navigation />
  </div>
);

export default Layout;
