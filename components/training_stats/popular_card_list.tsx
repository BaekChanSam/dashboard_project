import React from "react";
import { View, Text, StyleSheet } from "react-native";

const popularGames = [
  { name: "Popular Game 1", score: 95 },
  { name: "Popular Game 2", score: 90 },
  { name: "Popular Game 3", score: 85 },
  { name: "Popular Game 4", score: 80 },
];

const unpopularGames = [
  { name: "Unpopular Game 1", score: 40 },
  { name: "Unpopular Game 2", score: 35 },
  { name: "Unpopular Game 3", score: 30 },
  { name: "Unpopular Game 4", score: 25 },
];

export default function PopularCardList() {
  return (
    <View style={styles.container}>
      {/* 인기 게임 리스트 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular Games</Text>
        <View style={styles.grid}>
          {popularGames.map((game, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.cardTitle}>{game.name}</Text>
              <Text style={styles.cardText}>Score: {game.score}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* 비인기 게임 리스트 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Unpopular Games</Text>
        <View style={styles.grid}>
          {unpopularGames.map((game, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.cardTitle}>{game.name}</Text>
              <Text style={styles.cardText}>Score: {game.score}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%", // 두 개의 카드가 한 줄에 나란히 배치되도록 설정
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
    marginBottom: 10,
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#555",
  },
  cardText: {
    fontSize: 14,
    color: "#777",
  },
});
