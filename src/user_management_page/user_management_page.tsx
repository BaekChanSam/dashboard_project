import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useTrainingData } from "@/components/training_management/training_data_context";

export default function TrainingManagementPage() {
  const { categories, gamesData, toggleGameStatus } = useTrainingData();

  const renderGameItem = (game: { id: string; name: string; isActive: boolean }, categoryKey: string) => (
    <View key={game.id} style={styles.gameItem}>
      <Text style={styles.gameName}>{game.name}</Text>
      <TouchableOpacity
        style={[styles.button, game.isActive ? styles.activeButton : styles.inactiveButton]}
        onPress={() => toggleGameStatus(categoryKey, game.id)}
      >
        <Text style={styles.buttonText}>{game.isActive ? "Deactivate" : "Activate"}</Text>
      </TouchableOpacity>
    </View>
  );

  const renderCategory = (category: { key: string; title: string }) => (
    <View key={category.key} style={styles.categoryContainer}>
      <Text style={styles.categoryTitle}>{category.title}</Text>
      <FlatList
        data={gamesData[category.key]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderGameItem(item, category.key)}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Training Management</Text>
      <View style={styles.categoriesContainer}>
        {categories.map(renderCategory)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  categoriesContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  categoryContainer: {
    flex: 1,
    marginBottom: 16,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
    textAlign: "center",
  },
  gameItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  gameName: {
    fontSize: 16,
    color: "#333",
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  activeButton: {
    backgroundColor: "#ff6666",
  },
  inactiveButton: {
    backgroundColor: "#66cc66",
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});
