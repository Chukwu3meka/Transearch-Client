import { Typography } from "@mui/material";

const Footer = () => (
  <footer>
    <Typography variant="body2" color="textSecondary">
      ● {new Date().getFullYear()} Account Manager, inspired with ♥ by <b>MongoDB Search Atlas</b> ●
    </Typography>
  </footer>
);

export default Footer;
