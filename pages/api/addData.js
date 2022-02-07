import { connectToDatabase } from "lib/mongodb";

export default async (req, res) => {
  try {
    const { title, amount, description, credit } = req.body;

    const { db } = await connectToDatabase();

    await db
      .collection("transactions")

      .insertOne({
        title,
        amount,
        description,
        credit,
      });

    return res.status(200).send(true);
  } catch (error) {
    process.env.NODE_ENV !== "production" && console.log(error);
    return res.status(401).send(false);
  }
};
