import Link from "next/link";
import { Typography } from "@mui/material";

export default () => (
  <div className="layout-footer">
    <div>
      <Link href="/others/privacy">
        <a>Privacy Policy</a>
      </Link>
      <Link href="/others/terms">
        <a>Terms &amp; Conditions</a>
      </Link>
      <a href="https://chukwuemeka.vercel.app">Developer</a>
    </div>
    <Typography variant="body2" color="textSecondary">
      ● {new Date().getFullYear()} ViewCrunch ●
    </Typography>
  </div>
);
