import React, { useEffect, useState } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

import { useMediaQuery } from "react-responsive";

const PieChartsWaste = ({
  zero,
  one,
  two,
  three,
  four,
  more,
  color1,
  color2,
  color3,
  color4,
  color5,
  color6,
}) => {
  const data01 = [
    { name: "Group A", value: zero, fill: color1 },
    { name: "Group B", value: one, fill: color2 },
    { name: "Group C", value: two, fill: color3 },
    { name: "Group D", value: three, fill: color4 },
    { name: "Group D", value: four, fill: color5 },
    { name: "Group D", value: more, fill: color6 },
  ];

  const isHD = useMediaQuery({ query: `(max-width: 2100px)` });
  const [resize, setResize] = useState(90);
  useEffect(() => {
    if (isHD) {
      setResize(75);
      //   setResizeInner(80);
      //   setResizeOuter(130);
    }
  }, []);
  return (
    <>
      <div className="container">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data01}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={resize}
              label={false}
              paddingAngle={2}
            />
            <Pie
              data={data01}
              outerRadius={68}
              innerRadius={40}
              paddingAngle={2}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <style jsx>
        {`
          .container {
            width: 20rem;
            height: 20rem;
          }
        `}
      </style>
    </>
  );
};

export default PieChartsWaste;
