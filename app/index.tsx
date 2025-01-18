import React from "react";
import { View, StyleSheet } from "react-native";
import UsageChart from "./dashboard/usage_chart/usageChart"; // UsageChart 컴포넌트
import UserList from "./dashboard/user_list/userList"; // UserList 컴포넌트
import TrainingManagement from "./dashboard/training_management/training_management"; // TrainingManagement 컴포넌트
import Header from "./dashboard/header/header"; // Header 컴포넌트
import TrainingStats from "./dashboard/training_stats/training_stats"; // TrainingStats 컴포넌트
import QuestionList from "./dashboard/question_list/question_list"; // QuestionList 컴포넌트

export default function Dashboard() {
  return (
    <View style={styles.container}>
      {/* 상단 헤더 */}
      <Header />

      {/* 헤더 아래 메인 컨텐츠 */}
      <View style={styles.content}>
        {/* 상단 2개 컴포넌트 */}
        <View style={styles.topRow}>
          <View style={styles.leftComponent}>
            <UsageChart />
          </View>
          <View style={styles.rightComponent}>
            <TrainingStats />
          </View>
        </View>

        {/* 하단 3개 컴포넌트 */}
        <View style={styles.bottomRow}>
          <View style={styles.leftComponent}>
            <QuestionList />
          </View>
          <View style={styles.centerComponent}>
            <UserList />
          </View>
          <View style={styles.rightComponent}>
            <TrainingManagement />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  topRow: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 16, // 상단과 하단 간격
  },
  bottomRow: {
    flex: 1,
    flexDirection: "row",
  },
  leftComponent: {
    flex: 2, // 왼쪽 영역 비율
    marginRight: 8, // 오른쪽 간격
    alignItems: "stretch", // 자식 컴포넌트가 부모 너비를 가득 채우도록
  },
  centerComponent: {
    flex: 1, // 중앙 영역 비율
    marginHorizontal: 8, // 좌우 간격
  },
  rightComponent: {
    flex: 2, // 오른쪽 영역 비율
  },
});
