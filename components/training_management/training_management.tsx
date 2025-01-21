import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTrainingData } from "@/components/training_management/training_data_context";

export default function TrainingManagement() {
  const { categories, gamesData, renderGameItem } = useTrainingData();

  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  const randomGames = gamesData[randomCategory.key];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{randomCategory.title}</Text>
      {randomGames.map((game) => renderGameItem(randomCategory.key, game))}
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
});
