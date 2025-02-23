import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import trainingCount from '../../mock/training_count.json'; // JSON 데이터 import
import { View, Text } from 'react-native';

// Training 타입 정의
type Training = {
  name: string;
  count: number;
};

// percentage 필드를 포함하는 새로운 타입 정의
type TrainingWithPercentage = Training & {
  percentage: string;
};

export default function PreferenceCircularChart({ enableChartLabel }: { enableChartLabel?: boolean }) {
  const [data, setData] = useState<TrainingWithPercentage[]>([]);

  useEffect(() => {
    // JSON 데이터를 상태로 설정
    const rawData: Training[] = trainingCount;

    // 데이터 총합 계산
    const totalValue = rawData.reduce((sum, item) => sum + item.count, 0);

    // 데이터를 count 기준으로 정렬 후 상위 4개와 나머지 합산
    const sortedData = [...rawData].sort((a, b) => b.count - a.count);
    const top4 = sortedData.slice(0, 4); // 상위 4개
    const othersCount = sortedData.slice(4).reduce((sum, item) => sum + item.count, 0); // 나머지 합산

    // 백분율 데이터 추가
    const processedData: TrainingWithPercentage[] = [
      ...top4.map((item) => ({
        ...item,
        percentage: ((item.count / totalValue) * 100).toFixed(1),
      })),
      {
        name: '이외',
        count: othersCount,
        percentage: ((othersCount / totalValue) * 100).toFixed(1),
      },
    ];
    setData(processedData);
  }, []);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AA336A'];

  // 라벨 표시 함수
  const renderLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    index,
  }: {
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    index: number;
  }) => {
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
        style={{ fontSize: '12px', fontWeight: 'bold' }}
      >
        {`${data[index].percentage}%`}
      </text>
    );
  };

  return (
    <View
      style={{
        display: 'flex', // 가로 배치
        justifyContent: 'center', // 전체 가로 중앙 정렬
        alignItems: 'center', // 세로 중앙 정렬
        width: '100%', // 상단 오른쪽 영역의 너비에 맞추기
        height: '100%', // 상단 오른쪽 영역의 높이에 맞추기
        padding: 20,
        // boxSizing: "border-box",
      }}
    >
      {/* 원형 차트 */}
      <View style={{ marginRight: 20 }}>
        {' '}
        {/* 차트와 설명 사이 간격 */}
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            dataKey="count"
            label={renderLabel} // 라벨 함수 적용
            labelLine={false} // 라벨 라인 제거
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip /> {/* 툴팁 추가 */}
        </PieChart>
      </View>

      {/* 색상별 설명 */}
      {enableChartLabel && (
        <View>
          {data.map((entry, index) => (
            <View
              key={`label-${index}`}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 8,
              }}
            >
              {/* 색상 사각형 */}
              <View
                style={{
                  width: 16,
                  height: 16,
                  backgroundColor: COLORS[index % COLORS.length],
                  marginRight: 8,
                }}
              />
              {/* 텍스트 */}
              <Text>{`${entry.name}: ${entry.percentage}%`}</Text> {/* 백분율 표시 */}
            </View>
          ))}
        </View>
      )}
    </View>
  );
}
