import dbConnect from "../../../utils/dbConnect";
import Toolcreate from "../../../models/Toolscreate";

dbConnect();

export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const toolscreate = await Toolcreate.find({});

        res.status(200).json({ success: true, data: toolscreate });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
  }
};
