import dbConnect from "../../../utils/dbConnect";
import Toolwaste from "../../../models/Toolswaste";

dbConnect();

export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const toolswaste = await Toolwaste.find({});

        res.status(200).json({ success: true, data: toolswaste });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
  }
};
