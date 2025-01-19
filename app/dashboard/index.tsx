import React from "react";
import { View, StyleSheet } from "react-native";
import UsageChart from "@/src/usage_chart/usageChart";
import TrainingStats from "@/components/training_stats/training_stats";
import QuestionList from "@/components/question_list/question_list";
import UserList from "@/src/user_list/userList";
import TrainingManagement from "@/components/training_management/training_management";

export default function Dashboard() {
  return (
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
  );
}

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
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
