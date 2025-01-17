import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import UsageChart from "./dashboard/usage_chart/usageChart";
import UserList from "./dashboard/user_list/userList";
import TrainingManagement from "./dashboard/training_management/training_management";

// 화면 크기 가져오기
const { width, height } = Dimensions.get("window");

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {/* 왼쪽: UsageChart */}
        <View style={styles.left}>
          <UsageChart />
        </View>

        {/* 중앙: TrainingManagement */}
        <View style={styles.center}>
          <TrainingManagement />
        </View>

        {/* 오른쪽: UserList */}
        <View style={styles.right}>
          <UserList />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8f8f8",
    justifyContent: "flex-start", // 세로 정렬
    alignItems: "stretch", // 가로로 꽉 차게
  },
  row: {
    flexDirection: "row", // 수평 정렬
    justifyContent: "space-between", // 각 영역을 고르게 배분
    width: "100%", // 부모 컨테이너 너비를 100%로 설정
  },
  left: {
    flex: 4, // 왼쪽 영역 크기 비율을 4로 설정하여 더 넓게
    marginRight: 16, // 오른쪽에 여백 추가
  },
  center: {
    flex: 2, // 중앙 영역 크기 비율을 줄여서 2로 설정
    marginRight: 16, // 오른쪽에 여백 추가
  },
  right: {
    flex: 2, // 오른쪽 영역 크기 비율을 2로 설정
  },
  chartContainer: {
    height: "60%", // 높이를 60%로 설정하여 화면에 맞게 조정
    maxWidth: width, // 최대 너비를 화면 너비로 설정
    overflow: "hidden", // 오버플로우 숨기기
  },
});
