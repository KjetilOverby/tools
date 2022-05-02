import dbConnect from "../../../utils/dbConnect";
import NewBlades from "../../../models/NewBlades";

dbConnect();

export default async (req, res) => {
  const date = new Date();
  const lastDay = new Date(date.getFullYear(), req.query.month, 0);
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const newblades = await NewBlades.aggregate([
          {
            $match: {
              updated: {
                $gte: new Date(`${req.query.year}-${req.query.month2}-01`),
                $lte: new Date(
                  `${req.query.year}-${req.query.month}-${lastDay.getDate()}`
                ),
              },
            },
          },
          {
            $group: {
              _id: {
                type: "$type",
              },
              typeCount: { $sum: 1 },
            },
          },
        ]).sort({ _id: { type: -1 } });

        res.status(200).json({ success: true, data: newblades });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
  }
};
