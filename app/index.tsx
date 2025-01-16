import React from "react";
import { View, StyleSheet } from "react-native";
import UsageChart from "./dashboard/usage_chart/usageChart";
import UserList from "./dashboard/user_list/userList";

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {/* 왼쪽: UsageChart */}
        <View style={styles.left}>
          <UsageChart />
        </View>

        {/* 중앙: 첫 번째 UserList */}
        <View style={styles.center}>
          <UserList />
        </View>

        {/* 오른쪽: 두 번째 UserList */}
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
  },
  row: {
    flexDirection: "row", // 수평 정렬
    flex: 3, // 수평 영역을 전체 화면 크기에 맞게 채움
  },
  left: {
    flex: 3, // 왼쪽 영역을 화면의 1/3
    marginRight: 8, // 간격을 추가
  },
  center: {
    flex: 1, // 중앙 영역을 화면의 1/3
    marginRight: 8, // 간격을 추가
  },
  right: {
    flex: 1, // 오른쪽 영역을 화면의 1/3
  },
});
