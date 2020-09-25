import Link from "next/link";
import Typography from "@material-ui/core/Typography";

export default () => (
  <div className="layout-footer">
    <div>
      <Link href="/others/privacy">
        <a>Privacy Policy</a>
      </Link>
      <Link href="/others/terms">
        <a>Terms &amp; Conditions</a>
      </Link>
      <a href="https://pedrojr.netlify.app">Developer</a>
    </div>
    <Typography variant="body2" color="textSecondary">
      ● © {new Date().getFullYear()} PedroView ●
    </Typography>
  </div>
);
