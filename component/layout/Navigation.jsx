import Link from "next/link";
import { connect } from "react-redux";
import { useSnackbar } from "notistack";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import TransactionsIcon from "@mui/icons-material/FormatListBulletedRounded";

import { styles } from ".";
import { logoutAction } from "@store/actions";

const Navigation = ({ setAuth, logoutAction }) => {
  const { enqueueSnackbar } = useSnackbar();

  const FooterFunc = ({ href, click, icon }) =>
    href ? (
      <Link href={href}>
        <IconButton>{icon}</IconButton>
      </Link>
    ) : (
      <IconButton onClick={click}>{icon}</IconButton>
    );

  const logoutHandler = () => {
    setAuth(false);
    logoutAction();
    enqueueSnackbar("Logged out", { variant: "info" });
  };

  return (
    <div className={styles.navigation}>
      <FooterFunc href="/transactions" icon={<TransactionsIcon />} />
      <FooterFunc href="/" icon={<HomeIcon />} />
      <FooterFunc click={logoutHandler} icon={<LogoutIcon />} />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  logoutAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
