import dbConnect from "../../../utils/dbConnect";
import Linckblades from "../../../models/Linckblades";

dbConnect();

export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const blades = await Linckblades.find({});

        res.status(200).json({ success: true, data: blades });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
  }
};
