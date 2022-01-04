import { Typography } from "@mui/material";

const Footer = () => (
  <Typography variant="body2" color="textSecondary">
    ● {new Date().getFullYear()} ViewCrunch ●
  </Typography>
);

export default Footer;
