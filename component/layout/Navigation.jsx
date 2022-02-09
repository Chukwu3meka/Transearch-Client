import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import TransactionsIcon from "@mui/icons-material/FormatListBulletedRounded";

import { styles } from ".";

const Navigation = () => {
  const FooterFunc = ({ title, href, icon }) => (
    <Link href={href}>
      <IconButton>{icon}</IconButton>
    </Link>
  );

  return (
    <div className={styles.navigation}>
      <FooterFunc href="/transactions" title="All" icon={<TransactionsIcon />} />
      <FooterFunc href="/" title="Home" icon={<HomeIcon />} />
    </div>
  );
};

export default Navigation;
