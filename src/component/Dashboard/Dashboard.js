import React from "react";
import {
  Area,
  Bar,
  BarChart,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  Pie,
  PieChart,
  Scatter,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import useData from "../../hooks/useData";

const Dashboard = () => {
  const [data, setData] = useData();

  return (
    <div className="pt-20 pb-20 md:px-12 p-4 text-center">
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-2">
        <div>
          <BarChart
            width={400}
            height={300}
            data={data}
            margin={{
              top: 5,

              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis dataKey="sell" />
            <Tooltip />
            <Legend />
            <Bar dataKey="investment" fill="#8884d8" />
            <Bar dataKey="revenue" fill="#82ca9d" />
          </BarChart>
        </div>
        <div>
          <ComposedChart
            width={400}
            height={400}
            data={data}
            margin={{
              top: 20,

              bottom: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="month" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="amt"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar dataKey="sell" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="investment" stroke="#ff7300" />
            <Scatter dataKey="revenue" fill="red" />
          </ComposedChart>
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
            width={400}
            height={400}
            data={data}
            margin={{
              top: 20,

              bottom: 20,
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
    </div>
  );
};

export default Dashboard;
