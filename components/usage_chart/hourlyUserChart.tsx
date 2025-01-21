import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const hourlyData = [
  { hour: "00:00", users: 50 },
  { hour: "03:00", users: 30 },
  { hour: "06:00", users: 70 },
  { hour: "09:00", users: 90 },
  { hour: "12:00", users: 120 },
  { hour: "15:00", users: 150 },
  { hour: "18:00", users: 200 },
  { hour: "21:00", users: 170 },
];

export default function HourlyUserChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={hourlyData}
        margin={{ top: 40, right: 50, left: -10, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="hour" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="users" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}
