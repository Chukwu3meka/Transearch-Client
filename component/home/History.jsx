import { Paper, Typography } from "@mui/material";
import { styles } from ".";

import CreditIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import DebitIcon from "@mui/icons-material/ArrowCircleDownOutlined";

import Tooltip from "@mui/material/Tooltip";

const History = ({ lastTransactions }) => {
  console.log(lastTransactions);
  return (
    <Paper className={styles.history}>
      <Typography variant="body2" fontSize={13} color="ActiveCaption">
        Transaction History
      </Typography>
      <div>
        {lastTransactions.map(({ credit, title, description, balance, amount, date, _id }) => (
          <div key={_id} className={styles.transaction}>
            <Tooltip title={description}>{credit ? <CreditIcon color="success" /> : <DebitIcon color="error" />}</Tooltip>
            <div>
              <div>
                <Typography variant="body1" fontSize={13} color="GrayText">
                  {new Date(date).toDateString()}
                </Typography>

                <Typography variant="body1" fontSize={16} color={credit ? "green" : "error"}>
                  {amount.toLocaleString()}
                </Typography>
              </div>
              <div>
                <Typography variant="body1" fontSize={16}>
                  {title}
                </Typography>
                <Typography variant="body1" fontSize={16}>
                  {balance.toLocaleString()}
                </Typography>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Paper>
  );
};

export default History;
