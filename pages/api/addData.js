import { connectToDatabase } from "lib/mongodb";

export default async (req, res) => {
  try {
    const { title, amount, description, credit } = req.body;
    console.log(new Date().toDateString());

    const { db } = await connectToDatabase();

    // console.log(new Date().toDateString());

    // const dateReplacer = () => {
    //   let fullTextDate = new Date().toDateString();

    //   for (const [key, val] of Object.entries(maps)) {
    //     fullTextDate = fullTextDate.replace(key, val);
    //   }

    //   return `${fullTextDate.toLowerCase()} ${ordinalSuffix(new Date().getDay)}`;
    // };

    // console.log(title, amount, description, credit, dateReplacer());

    await db
      .collection("transactions")

      .insertOne({
        title,
        amount,
        description,
        credit,
        date: {
          timeStamp: new Date(),
          // fullTextDate: dateReplacer(),
        },
      });

    // await db.close();

    return res.status(200).send(true);
  } catch (error) {
    process.env.NODE_ENV !== "production" && console.log(error);
    return res.status(401).send(false);
  }
};
