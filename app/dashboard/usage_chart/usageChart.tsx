import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { day: "Mon", users: 120 },
  { day: "Tue", users: 200 },
  { day: "Wed", users: 150 },
  { day: "Thu", users: 170 },
  { day: "Fri", users: 300 },
  { day: "Sat", users: 250 },
  { day: "Sun", users: 220 },
];

export default function UsageChart() {
  return (
    <div
      style={{
        display: "flex", // 플렉스 박스 설정
        justifyContent: "flex-start", // 왼쪽 정렬
        alignItems: "center", // 세로 중앙 정렬
        width: "100%", // 전체 화면 너비
        height: "60vh", // 화면 높이에 비례한 크기
        border: "1px solid #ccc", // 테두리 추가 (시각적 구분)
        padding: "20px", // 내부 여백
        boxSizing: "border-box",
        backgroundColor: "#f9f9f9", // 배경색 추가
      }}
    >
      {/* ResponsiveContainer를 사용하여 크기를 자동 조정 */}
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 40, right: 50, left: 30, bottom: 20 }}
        >
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
