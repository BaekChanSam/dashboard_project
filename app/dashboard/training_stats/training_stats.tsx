import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const rawData = [
  { name: "Game A", value: 400 },
  { name: "Game B", value: 500 },
  { name: "Game C", value: 300 },
  { name: "Game D", value: 600 },
  { name: "Others", value: 200 },
];

// 데이터 총합 계산
const total = rawData.reduce((sum, item) => sum + item.value, 0);

// 백분율 데이터 생성
const data = rawData.map((item) => ({
  ...item,
  percentage: ((item.value / total) * 100).toFixed(1), // 백분율 계산
}));

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AA336A"];

// 라벨 표시 함수
const renderLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) / 2; // 반지름 계산
  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180)); // x좌표 계산
  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180)); // y좌표 계산

  return (
    <text
      x={x}
      y={y}
      fill="white" // 텍스트 색상
      textAnchor="middle"
      dominantBaseline="central"
      style={{ fontSize: "12px", fontWeight: "bold" }}
    >
      {`${data[index].percentage}%`}
    </text>
  );
};

export default function TrainingStats() {
  return (
    <div
      style={{
        display: "flex", // 가로 배치
        justifyContent: "center", // 전체 가로 중앙 정렬
        alignItems: "center", // 세로 중앙 정렬
        width: "100%", // 상단 오른쪽 영역의 너비에 맞추기
        height: "100%", // 상단 오른쪽 영역의 높이에 맞추기
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      {/* 원형 차트 */}
      <div style={{ marginRight: "20px" }}> {/* 차트와 설명 사이 간격 */}
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
            label={renderLabel} // 라벨 함수 적용
            labelLine={false} // 라벨 라인 제거
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip /> {/* 툴팁 추가 */}
        </PieChart>
      </div>

      {/* 색상별 설명 */}
      <div>
        {data.map((entry, index) => (
          <div
            key={`label-${index}`}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "8px",
            }}
          >
            {/* 색상 사각형 */}
            <div
              style={{
                width: "16px",
                height: "16px",
                backgroundColor: COLORS[index % COLORS.length],
                marginRight: "8px",
              }}
            ></div>
            {/* 텍스트 */}
            <span>{`${entry.name}: ${entry.percentage}%`}</span> {/* 백분율 표시 */}
          </div>
        ))}
      </div>
    </div>
  );
}
