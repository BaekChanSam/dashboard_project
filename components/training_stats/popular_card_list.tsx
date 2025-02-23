import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Game = {
  name: string;
  count: number;
};

export default function PopularCardList() {
  const [popularGames, setPopularGames] = useState<Game[]>([]);
  const [unpopularGames, setUnpopularGames] = useState<Game[]>([]);

  useEffect(() => {
    // JSON 파일을 require로 로드
    const trainingCount: Game[] = require('../../mock/training_count.json');

    // 데이터를 count 기준으로 정렬 후 상위 4개와 하위 4개로 분리
    const sortedGames = [...trainingCount].sort((a, b) => b.count - a.count);
    setPopularGames(sortedGames.slice(0, 4)); // 상위 4개
    setUnpopularGames(sortedGames.slice(-4)); // 하위 4개
  }, []);

  return (
    <View style={styles.container}>
      {/* 인기 게임 리스트 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular Games</Text>
        <View style={styles.grid}>
          {popularGames.map((game, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.cardTitle}>{game.name}</Text>
              <Text style={styles.cardText}>Count: {game.count}</Text>
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
              <Text style={styles.cardText}>Count: {game.count}</Text>
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
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#555',
  },
  cardText: {
    fontSize: 14,
    color: '#777',
  },
});
