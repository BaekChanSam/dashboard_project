import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import trainingData from '../../../mock/training_data.json';
import { Button } from 'tamagui';

type Category = {
  key: string;
  title: string;
};

type Game = {
  id: string;
  name: string;
  isActive: boolean;
};

export default function TrainingMultiManagement() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [gamesData, setGamesData] = useState<Record<string, Game[]>>({});

  useEffect(() => {
    // JSON 데이터에서 카테고리 및 게임 데이터 로드
    const { categories, gamesData } = trainingData;
    setCategories(categories);
    setGamesData(gamesData);
  }, []);

  const toggleGameStatus = (categoryKey: string, gameId: string) => {
    setGamesData((prevData) => ({
      ...prevData,
      [categoryKey]: prevData[categoryKey].map((game) => (game.id === gameId ? { ...game, isActive: !game.isActive } : game)),
    }));
  };

  const renderGame = (categoryKey: string, game: Game) => (
    <View key={game.id} style={styles.gameItem}>
      <Text style={styles.gameText}>{game.name}</Text>
      <View style={styles.buttonContainer}>
        <Button
          style={[styles.button, game.isActive ? styles.activeButton : styles.inactiveButton]}
          onPress={() => toggleGameStatus(categoryKey, game.id)}
        >
          <Text style={styles.buttonText}>{game.isActive ? 'Deactivate' : 'Activate'}</Text>
        </Button>
      </View>
    </View>
  );

  const renderCategory = (category: Category) => (
    <View key={category.key} style={styles.categoryItem}>
      <Text style={styles.categoryText}>{category.title}</Text>
      {gamesData[category.key]?.map((game) => renderGame(category.key, game))}
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>카테고리 및 게임 목록</Text>
      {categories.map((category) => renderCategory(category))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  categoryItem: {
    width: '90%',
    padding: 16,
    marginBottom: 20,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    alignItems: 'flex-start',
  },
  categoryText: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  gameItem: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gameText: {
    fontSize: 16,
    color: '#555',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
    borderWidth: 1,
    marginLeft: 10,
  },
  activeButton: {
    borderColor: '#4caf50',
    backgroundColor: '#4caf50',
  },
  inactiveButton: {
    borderColor: '#f44336',
    backgroundColor: '#f44336',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
