import UsageChart from "@/components/usage_chart/usageChart";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// 시간대별 사용자 데이터
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

export default function WeeklyUserPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      {/* 왼쪽: UsageChart 호출 */}
      <div style={{ flex: 1, marginRight: "20px", height: "100%" }}>
        <UsageChart />
      </div>

      {/* 오른쪽: 시간대별 사용자 수 막대 그래프 */}
      <div style={{ flex: 1, height: "100%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "51vh", // 라인 차트와 같은 높이
            border: "1px solid #ccc",
            backgroundColor: "#f9f9f9",
          }}
        >
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
        </div>
      </div>
    </div>
  );
}
