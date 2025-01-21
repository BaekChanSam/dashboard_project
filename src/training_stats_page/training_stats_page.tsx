import PopularCardList from "@/components/training_stats/popular_card_list";
import PreferenceCircularChart from "@/components/training_stats/preference_circular_chart";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TrainingStatsPage() {
  return (
    <View style={styles.container}>
      {/* 페이지 제목 */}
      <Text style={styles.title}>Training Stats Page</Text>

      {/* 메인 콘텐츠 */}
      <View style={styles.content}>
        {/* 왼쪽: PreferenceCircularChart */}
        <View style={styles.left}>
          <PreferenceCircularChart />
        </View>

        {/* 오른쪽: PopularCardList */}
        <View style={styles.right}>
          <PopularCardList />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  content: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  left: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  right: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
