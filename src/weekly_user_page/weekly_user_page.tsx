import HourlyUserChart from '@/components/usage_chart/hourlyUserChart';
import PointChart from '@/components/usage_chart/pointChart';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WeeklyUserPage() {
  return (
    <View style={styles.container}>
      {/* 페이지 제목 */}
      <Text style={styles.title}>Weekly User Page</Text>

      {/* 차트 컨테이너 */}
      <View style={styles.chartContainer}>
        {/* 주간 사용자 라인 차트 */}
        <View style={styles.chart}>
          <PointChart />
        </View>

        {/* 시간대별 사용자 바 차트 */}
        <View style={styles.chart}>
          <HourlyUserChart />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  chartContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center', // 수평 가운데 정렬
    alignItems: 'center', // 수직 가운데 정렬
    flexWrap: 'wrap', // 차트가 화면 크기에 따라 줄바꿈
  },
  chart: {
    width: '45%', // 차트 너비를 동일하게 설정
    height: 400, // 차트 높이를 동일하게 설정
    margin: 10, // 차트 간격
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
});
