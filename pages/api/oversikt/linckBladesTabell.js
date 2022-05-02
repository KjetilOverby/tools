import dbConnect from "../../../utils/dbConnect";
import Linckblades from "../../../models/Linckblades";

dbConnect();

export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const blades = await Linckblades.aggregate([
          {
            $group: {
              _id: {
                type: "$type",
              },
              typeCount: { $sum: 1 },
            },
          },
        ]).sort({ _id: { type: -1 } });

        res.status(200).json({ success: true, data: blades });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
  }
};
