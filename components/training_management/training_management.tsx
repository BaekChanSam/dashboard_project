import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTrainingData } from "@/components/training_management/training_data_context";

export default function TrainingManagement() {
  const { categories, gamesData, toggleGameStatus } = useTrainingData();

  // 예제: 랜덤 카테고리 선택
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  const randomGames = gamesData[randomCategory.key];

  const renderGame = (game: { id: string; name: string; isActive: boolean }) => (
    <View key={game.id} style={styles.itemContainer}>
      <Text style={styles.label}>{game.name}</Text>
      <Text style={styles.status}>{game.isActive ? "Active" : "Inactive"}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{randomCategory.title}</Text>
      {randomGames.map((game) => renderGame(game))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  label: {
    fontSize: 16,
    flex: 1,
  },
  status: {
    fontSize: 14,
    color: "#666",
  },
});
