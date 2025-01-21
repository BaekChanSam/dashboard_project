import HourlyUserChart from "@/components/usage_chart/hourlyUserChart";
import PointChart from "@/components/usage_chart/pointChart";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

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
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  chartContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  chart: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
});
