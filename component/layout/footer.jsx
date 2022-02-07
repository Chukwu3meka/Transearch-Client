import { Typography } from "@mui/material";

const Footer = () => (
  <footer>
    <Typography variant="body2" color="textSecondary">
      ● {new Date().getFullYear()} ViewCrunch ●
    </Typography>
  </footer>
);

export default Footer;
