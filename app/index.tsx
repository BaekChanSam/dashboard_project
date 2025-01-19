import React from "react";
import { View, StyleSheet } from "react-native";
import Sidebar from "./dashboard/sidebar/sidebar";
import UsageChart from "./dashboard/usage_chart/usageChart";
import UserList from "./dashboard/user_list/userList";
import TrainingManagement from "./dashboard/training_management/training_management";
import Header from "./dashboard/header/header";
import TrainingStats from "./dashboard/training_stats/training_stats";
import QuestionList from "./dashboard/question_list/question_list";

export default function Dashboard() {
  return (
    <View style={styles.container}>
      {/* 상단 헤더 */}
      <Header />

      {/* 본문 컨텐츠 */}
      <View style={styles.body}>
        {/* 왼쪽 Sidebar */}
        <View style={styles.sidebar}>
          <Sidebar />
        </View>

        {/* 나머지 메인 컨텐츠 */}
        <View style={styles.mainContent}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  body: {
    flex: 1,
    flexDirection: "row", // Sidebar와 Main 컨텐츠를 가로로 정렬
  },
  sidebar: {
    width: 200, // Sidebar의 너비
    backgroundColor: "#333",
  },
  mainContent: {
    flex: 1, // 남은 화면을 Main 컨텐츠가 차지
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  topRow: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 16,
  },
  bottomRow: {
    flex: 1,
    flexDirection: "row",
  },
  leftComponent: {
    flex: 2,
    marginRight: 8,
  },
  centerComponent: {
    flex: 1,
    marginHorizontal: 8,
  },
  rightComponent: {
    flex: 2,
  },
});
