import Header from "./header";
import Footer from "./footer";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

export default ({ children }) => (
  <Grid container className="layout">
    <Grid item sm={12} md={12}>
      <Header />
    </Grid>
    <Grid item sm={12} md={12}>
      <Paper>{children}</Paper>
    </Grid>
    <Grid item sm={12} md={12}>
      <Footer />
    </Grid>
  </Grid>
);
