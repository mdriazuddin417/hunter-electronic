import React from "react";
import { Bar, Tooltip, XAxis, YAxis } from "recharts";
import useData from "../../hooks/useData";

const BarChart = () => {
  const [data, setData] = useData();
  return (
    <div>
      <BarChart width={800} height={500} data={data}>
        <Bar dataKey="revenue" fill="#8884d8"></Bar>
        <XAxis data="investment"></XAxis>
        <Tooltip></Tooltip>
        <YAxis data="sell"></YAxis>
      </BarChart>
    </div>
  );
};

export default BarChart;
