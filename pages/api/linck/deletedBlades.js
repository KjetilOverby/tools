import dbConnect from "../../../utils/dbConnect";
import Linckwaste from "../../../models/linckwaste";

dbConnect();

const currentYear = new Date().getFullYear();
// const currentMonth = new Date().getMonth() + 1;

export default async (req, res) => {
  const { method } = req;
  const date = new Date();
  const lastDay = new Date(date.getFullYear(), req.query.month, 0);
  switch (method) {
    case "GET":
      try {
        const linckwaste = await Linckwaste.aggregate([
          {
            $match: {
              wasteDate: {
                $gte: new Date(
                  `${req.query.yearRequest}-${req.query.month}-01`
                ),
                $lte: new Date(
                  `${req.query.yearRequest}-${
                    req.query.month2
                  }-${lastDay.getDate()}`
                ),
              },
            },
          },
        ]);

        res.status(200).json({ success: true, data: linckwaste });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
  }
  console.log(lastDay.getDate());
};
