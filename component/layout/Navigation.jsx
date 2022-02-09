import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";
import TransactionsIcon from "@mui/icons-material/FormatListBulletedRounded";

import { styles } from ".";

const Navigation = () => {
  const FooterFunc = ({ href, icon }) => (
    <Link href={href}>
      <IconButton>{icon}</IconButton>
    </Link>
  );

  return (
    <div className={styles.navigation}>
      <FooterFunc href="/" icon={<HomeIcon />} />
      <FooterFunc href="/transactions" icon={<TransactionsIcon />} />
    </div>
  );
};

export default Navigation;
