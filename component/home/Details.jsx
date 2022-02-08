import { Paper, Typography } from "@mui/material";
import { styles } from ".";

const details = {
  lastTransaction: "Sunday Febuary 07 2022",
};
const Details = ({ balance, name }) => {
  return (
    <Paper className={styles.balance}>
      <Typography variant="body2" fontSize={13} color="ActiveCaption">
        {`${name} Balance`}
      </Typography>
      <Typography variant="body1" color={balance >= 0 ? "green" : "error"} fontSize={20}>
        {balance >= 0 ? `$${balance.toLocaleString()}` : `-$${Math.abs(balance).toLocaleString()}`} USD
      </Typography>
      <Typography variant="body2" fontSize={30}>
        {name}
      </Typography>
      <div>
        <Typography variant="body2" fontSize={15} color="peru">
          {`Last Transaction: ${details.lastTransaction}`}
        </Typography>
      </div>
    </Paper>
  );
};

export default Details;
