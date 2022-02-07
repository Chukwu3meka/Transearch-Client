import { Paper, Typography } from "@mui/material";
import { styles } from ".";

const details = {
  balance: 5000.9,
  number: "0306 **** **** 2022",
  name: "Company One",
  lastTransaction: "Sunday Febuary 07 2022",
};
const Details = () => {
  return (
    <Paper className={styles.balance}>
      <Typography variant="body2" fontSize={13} color="ActiveCaption">
        {`${details.name} Balance`}
      </Typography>
      <Typography variant="body1" color={details.balance >= 0 ? "green" : "error"} fontSize={20}>
        {details.balance >= 0 ? `$${details.balance}` : `-$${Math.abs(details.balance)}`} USD
      </Typography>
      <Typography variant="body2" fontSize={30}>
        {details.number}
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
