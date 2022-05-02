import dbConnect from "../../../utils/dbConnect";
import Service from "../../../models/Service";

dbConnect();

// const currentYear = new Date().getFullYear();

export default async (req, res) => {
  const date = new Date();
  const lastDay = new Date(date.getFullYear(), req.query.month, 0);

  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const service = await Service.aggregate([
          {
            $match: {
              serviceDate: {
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

        res.status(200).json({ success: true, data: service });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
  }
};
