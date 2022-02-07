import { Paper, Typography } from "@mui/material";
import { styles } from ".";

import CreditIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import DebitIcon from "@mui/icons-material/ArrowCircleDownOutlined";

import Tooltip from "@mui/material/Tooltip";

const history = [
  {
    credit: true,
    title: "Digitized solution-oriented focus group",
    desc: "Quia doloribus facere et numquam. Labore qui qui quibusdam et eum molestiae nam aut est. Aut sed quo labore. Nesciunt nesciunt saepe rerum aliquam omnis est assumenda. Sit incidunt sunt. Veniam sunt sed repellendus ipsa.",
    balance: 200,
    amount: 3100,
    date: "Sunday Febuary 07 2022",
  },
  {
    credit: true,
    title: "Versatile exuding productivity",
    desc: "Explicabo dolorem labore facilis quis et eveniet aliquid doloremque consequuntur. Optio eum consequatur voluptas debitis ratione repudiandae nihil ad officiis.",
    balance: -200,
    amount: 300,
    date: "Sunday Febuary 07 2022",
  },
  {
    credit: false,
    title: "Distributed composite contingency",
    desc: "Occaecati quae perferendis ut. Voluptatum dolor eaque voluptatibus ipsa. Harum ipsam ea.",
    balance: -200,
    amount: 40,
    date: "Sunday Febuary 07 2022",
  },
];

const History = () => {
  return (
    <Paper className={styles.history}>
      <Typography variant="body2" fontSize={13} color="ActiveCaption">
        Transaction History
      </Typography>
      <div>
        {history.map(({ credit, title, desc, balance, amount, date }, index) => (
          <div key={index} className={styles.transaction}>
            <Tooltip title={desc}>{credit ? <CreditIcon color="success" /> : <DebitIcon color="error" />}</Tooltip>
            <div>
              <div>
                <Typography variant="body1" fontSize={13} color="GrayText">
                  {new Date(date).toDateString()}
                </Typography>

                <Typography variant="body1" fontSize={16} color={credit ? "green" : "error"}>
                  {amount}
                </Typography>
              </div>
              <div>
                <Typography variant="body1" fontSize={16}>
                  {title}
                </Typography>
                <Typography variant="body1" fontSize={16}>
                  {balance}
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
