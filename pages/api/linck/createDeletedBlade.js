import dbConnect from "../../../utils/dbConnect";
import Waste from "../../../models/linckwaste";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "POST":
      if (req.query.user === process.env.USER_SUB) {
        try {
          const waste = new Waste(req.body);
          waste.save().then(() => {
            res.send(waste);
          });
        } catch (error) {
          res.status(400).json({ success: false });
        }
      } else {
        res.send("Uautorisert forespørsel");
        res.status(400).json({ success: false });
      }
      break;
  }
};
