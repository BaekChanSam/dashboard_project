import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import trainingData from "../../mock/training_data.json"; // JSON 데이터 import

type Game = {
  id: string;
  name: string;
  isActive: boolean;
};

type Category = {
  key: string;
  title: string;
};

export default function TrainingSingleManagement() {
  const [brainCategory, setBrainCategory] = useState<Category | null>(null);
  const [brainGames, setBrainGames] = useState<Game[]>([]);

  useEffect(() => {
    // training_data.json에서 데이터 읽기
    const { categories, gamesData } = trainingData;

    // brain 카테고리 찾기
    const brain = categories.find((category) => category.key === "brain");
    if (brain) {
      setBrainCategory(brain);
    }

    // brain 카테고리의 게임 데이터 설정
    if (gamesData.brain) {
      setBrainGames(gamesData.brain);
    }
  }, []);

  // 게임 아이템 렌더링 함수
  const renderGameItem = (game: Game) => (
    <View key={game.id} style={styles.gameItem}>
      <Text style={styles.gameName}>{game.name}</Text>
      <Text style={styles.gameStatus}>
        {game.isActive ? "활성화됨" : "비활성화됨"}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* 데이터가 로드되었는지 확인 */}
      {brainCategory ? (
        <>
          {/* 카테고리 제목 */}
          <Text style={styles.title}>{brainCategory.title}</Text>
          {/* 게임 리스트 */}
          {brainGames.map((game) => renderGameItem(game))}
        </>
      ) : (
        <Text style={styles.loadingText}>데이터를 불러오는 중...</Text>
      )}
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
  gameItem: {
    marginBottom: 12,
    padding: 10,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  gameName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#333",
  },
  gameStatus: {
    fontSize: 14,
    color: "#666",
  },
  loadingText: {
    fontSize: 16,
    color: "#999",
    textAlign: "center",
    marginTop: 20,
  },
});
