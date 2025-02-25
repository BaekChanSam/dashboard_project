import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// 타입 정의
type UserData = {
  day: string;
  users: number;
};

export default function PointChart() {
  const [data, setData] = useState<UserData[]>([]);

  useEffect(() => {
    // JSON 데이터를 require로 불러오고 타입 단언 적용
    const weeklyUsersData: UserData[] = require('../../../mock/weekly_users.json');
    setData(weeklyUsersData);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        height: '51vh',
        border: '1px solid #ccc',
        backgroundColor: '#f9f9f9',
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 40, right: 50, left: -10, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="users" stroke="#8884d8" activeDot={{ r: 10 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
