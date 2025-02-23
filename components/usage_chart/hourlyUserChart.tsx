import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

type HourlyData = {
  hour: string;
  users: number;
};

export default function HourlyUserChart() {
  const [data, setData] = useState<HourlyData[]>([]);

  useEffect(() => {
    // JSON 데이터를 require로 불러오기
    const hourlyUsersData: HourlyData[] = require('../../mock/hourly_users.json');
    setData(hourlyUsersData);
  }, []);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 40, right: 50, left: -10, bottom: 20 }}>
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
