import dbConnect from "../../../utils/dbConnect";
import Blades from "../../../models/Linckblades";

dbConnect();

export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "DELETE":
      if (req.query.user === process.env.USER_SUB) {
        try {
          const blade = await Blades.deleteOne({ _id: req.query.del });
          if (!blade) return res.status(404).send();
          res.send(blade);

          // res.status(200).json({ success: true, data: blade });
        } catch (error) {
          res.status(400).json({ success: false });
        }
      } else {
        res.send("Uautorisert forespørsel");
      }
      break;
  }
};
