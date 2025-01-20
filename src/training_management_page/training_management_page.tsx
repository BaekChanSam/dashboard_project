import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions } from "react-native";

type Game = {
  id: string;
  name: string;
  isActive: boolean;
};

const categories = [
  { key: "brain", title: "두뇌 운동" },
  { key: "body", title: "신체 운동" },
  { key: "mindfulness", title: "마음 챙김" },
  { key: "health", title: "건강 수업" },
  { key: "selfTest", title: "자가 검사" },
];

const gamesData: Record<string, Game[]> = {
  brain: [
    { id: "1", name: "Memory Puzzle", isActive: true },
    { id: "2", name: "Quick Math", isActive: false },
  ],
  body: [
    { id: "3", name: "Yoga Trainer", isActive: true },
    { id: "4", name: "Fitness Quest", isActive: true },
  ],
  mindfulness: [
    { id: "5", name: "Meditation Guide", isActive: false },
    { id: "6", name: "Breathing Exercise", isActive: true },
  ],
  health: [
    { id: "7", name: "Diet Tracker", isActive: false },
    { id: "8", name: "Healthy Recipes", isActive: true },
  ],
  selfTest: [
    { id: "9", name: "Stress Level Test", isActive: true },
    { id: "10", name: "Sleep Quality Test", isActive: false },
  ],
};

const { width, height } = Dimensions.get("window");

export default function TrainingManagementPage() {
  const [games, setGames] = useState<Record<string, Game[]>>(gamesData);

  const toggleGameStatus = (category: string, id: string) => {
    setGames((prevGames) => ({
      ...prevGames,
      [category]: prevGames[category].map((game) =>
        game.id === id ? { ...game, isActive: !game.isActive } : game
      ),
    }));
  };

  const renderGameItem = (category: string, game: Game) => (
    <View key={game.id} style={styles.gameItem}>
      <Text style={styles.gameName}>{game.name}</Text>
      <TouchableOpacity
        style={[styles.button, game.isActive ? styles.activeButton : styles.inactiveButton]}
        onPress={() => toggleGameStatus(category, game.id)}
      >
        <Text style={styles.buttonText}>{game.isActive ? "Deactivate" : "Activate"}</Text>
      </TouchableOpacity>
    </View>
  );

  const renderCategorySection = (category: { key: string; title: string }) => (
    <View key={category.key} style={styles.categorySection}>
      <Text style={styles.categoryTitle}>{category.title}</Text>
      <FlatList
        data={games[category.key]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderGameItem(category.key, item)}
        showsVerticalScrollIndicator={false}
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
    height: "50%", // 상단과 하단 각각 50% 높이
  },
  categorySection: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    overflow: "hidden",
    padding: 10,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333333",
    textAlign: "center",
  },
  gameItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#dddddd",
  },
  gameName: {
    fontSize: 14,
    color: "#333333",
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
