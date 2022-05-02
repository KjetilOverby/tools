// import dbConnect from "../../../utils/dbConnect";
// import Tool from "../../../models/Toolregist";

// dbConnect();

// export default async (req, res) => {
//   const { method } = req;
//   switch (method) {
//     case "POST":
//       try {
//         const tool = new Tool(req.body);
//         tool.save().then(() => {
//           res.send(tool);
//         });
//       } catch (error) {
//         res.status(400).json({ success: false });
//       }

//       break;
//   }
// };
