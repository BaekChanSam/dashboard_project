import React from "react";
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useTrainingData } from "@/components/training_management/training_data_context";

export default function TrainingManagementPage() {
  const { categories, gamesData, toggleGameStatus } = useTrainingData();

  const renderGameItem = (categoryKey: string, game: { id: string; name: string; isActive: boolean }) => (
    <View key={game.id} style={styles.itemContainer}>
      <Text style={styles.label}>{game.name}</Text>
      <View style={styles.radioButtons}>
        <TouchableOpacity
          style={[styles.radioButton, game.isActive && styles.selected]}
          onPress={() => toggleGameStatus(categoryKey, game.id)}
        >
          <Text style={styles.radioButtonText}>True</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.radioButton, !game.isActive && styles.selected]}
          onPress={() => toggleGameStatus(categoryKey, game.id)}
        >
          <Text style={styles.radioButtonText}>False</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderCategorySection = (category: { key: string; title: string }) => (
    <View key={category.key} style={styles.categoryContainer}>
      <Text style={styles.categoryTitle}>{category.title}</Text>
      <FlatList
        data={gamesData[category.key]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderGameItem(category.key, item)}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      {/* 상단 2개 */}
      <View style={styles.row}>
        {categories.slice(0, 2).map(renderCategorySection)}
      </View>

      {/* 하단 3개 */}
      <View style={styles.row}>
        {categories.slice(2).map(renderCategorySection)}
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
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    height: "50%", // 각 행의 높이 비율
  },
  categoryContainer: {
    flex: 1,
    marginHorizontal: 5,
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
    color: "#333",
    textAlign: "center",
  },
  flatListContainer: {
    paddingBottom: 10,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  label: {
    flex: 1,
    fontSize: 14,
    color: "#333",
  },
  radioButtons: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    marginHorizontal: 5,
  },
  selected: {
    backgroundColor: "#4caf50",
  },
  radioButtonText: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
  },
});
