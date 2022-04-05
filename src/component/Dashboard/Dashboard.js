import React from "react";
import {
  Area,
  Bar,
  BarChart,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import useData from "../../hooks/useData";

const Dashboard = () => {
  const [data, setData] = useData();

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 text-center md:px-12 p-4">
      <div>
        <BarChart width={500} height={400} data={data}>
          <Bar dataKey="revenue" fill="#8884d8"></Bar>
          <XAxis data="month"></XAxis>
          <Tooltip></Tooltip>
          <YAxis data="sell"></YAxis>
        </BarChart>
      </div>
      <div>
        <LineChart width={500} height={400} data={data}>
          <Line dataKey={"revenue"}></Line>
          <Line dataKey={"investment"}></Line>
          <XAxis data="month"></XAxis>
          <Tooltip></Tooltip>
          <YAxis data="sell"></YAxis>
        </LineChart>
      </div>
      <div>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            dataKey="investment"
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="#8884d8"
          />
          <Pie
            data={data}
            dataKey="sell"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            fill="#82ca9d"
            label
          />

          <Tooltip></Tooltip>
        </PieChart>
      </div>
      <div>
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="month" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="investment"
            fill="#8884d8"
            stroke="#8884d8"
          />
          <Bar dataKey="sell" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
        </ComposedChart>
      </div>
    </div>
  );
};

export default Dashboard;
