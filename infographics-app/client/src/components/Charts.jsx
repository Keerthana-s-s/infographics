import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, Legend } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AA55FF"];

export default function Charts({ data }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <LineChart width={400} height={250} data={data.line}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="users" stroke="#0088FE" />
      </LineChart>

      <PieChart width={400} height={250}>
        <Pie data={data.pie} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
          {data.pie.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
        <Tooltip />
      </PieChart>
    </div>
  );
}
