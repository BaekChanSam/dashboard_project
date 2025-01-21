import React from "react";
import { View, StyleSheet } from "react-native";
import { useTrainingData } from "@/components/training_management/training_data_context";

export default function TrainingManagementPage() {
  const { categories, renderCategorySection } = useTrainingData();

  return (
    <View style={styles.container}>
      {/* 상단 2개 카테고리 */}
      <View style={styles.row}>
        {categories.slice(0, 2).map((category) => (
          <View style={styles.categoryWrapper} key={category.key}>
            {renderCategorySection(category)}
          </View>
        ))}
      </View>
      {/* 하단 3개 카테고리 */}
      <View style={styles.row}>
        {categories.slice(2).map((category) => (
          <View style={styles.categoryWrapper} key={category.key}>
            {renderCategorySection(category)}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch", // 세로로 공간을 균등하게 채우기
    marginBottom: 10,
  },
  categoryWrapper: {
    flex: 1, // 각각의 카테고리가 동일한 크기를 차지하도록 설정
    marginHorizontal: 5, // 카테고리 간격
  },
  categoryContainer: {
    flex: 1, // 카테고리가 세로 방향으로도 균등하게 늘어나도록 설정
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#333",
  },
  flatListContainer: {
    flex: 1,
  },
});
