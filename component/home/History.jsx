import { Paper, Typography } from "@mui/material";
import { styles } from ".";

const details = {
  balance: 5000.9,
  number: "0306 **** **** 2022",
  name: "Company One",
  accountant: { name: "Person Six", number: "0701 000 7777" },
};
const History = () => {
  return (
    <Paper className={styles.balance}>
      <Typography variant="body2" fontSize={13}>
        {`${details.name} History`}
      </Typography>
      <Typography variant="body1" color={details.balance >= 0 ? "green" : "error"} fontSize={20}>
        {details.balance >= 0 ? `$${details.balance}` : `-$${Math.abs(details.balance)}`} USD
      </Typography>
      <Typography variant="body2" fontSize={40}>
        {details.number}
      </Typography>
      <div>
        <Typography variant="body2" fontSize={18}>
          {`${details.accountant?.name} ~ ${details.accountant?.number}`}
        </Typography>
      </div>
    </Paper>
  );
};

export default History;
