import React, { createContext, useContext, useState, ReactNode } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, FlatList } from "react-native";

// 데이터 타입 정의
type Game = {
  id: string;
  name: string;
  isActive: boolean;
};

type Category = {
  key: string;
  title: string;
};

type TrainingDataContextType = {
  categories: Category[];
  gamesData: Record<string, Game[]>;
  toggleGameStatus: (categoryKey: string, gameId: string) => void;
  renderGameItem: (categoryKey: string, game: Game) => React.ReactNode;
  renderCategorySection: (category: Category) => React.ReactNode;
};

// 초기 데이터
const categories: Category[] = [
  { key: "brain", title: "두뇌 운동" },
  { key: "body", title: "신체 운동" },
  { key: "mindfulness", title: "마음 챙김" },
  { key: "health", title: "건강 수업" },
  { key: "selfTest", title: "자가 검사" },
];

const initialGamesData: Record<string, Game[]> = {
  brain: [
    { id: "1", name: "Memory Puzzle", isActive: true },
    { id: "2", name: "Quick Math", isActive: false },
    { id: "1", name: "Memory Puzzle", isActive: true },
    { id: "2", name: "Quick Math", isActive: false },
    { id: "1", name: "Memory Puzzle", isActive: true },
    { id: "2", name: "Quick Math", isActive: false },
  
  ],
  body: [
    { id: "3", name: "Yoga Trainer", isActive: true },
    { id: "4", name: "Fitness Quest", isActive: true },
    { id: "1", name: "Memory Puzzle", isActive: true },
    { id: "2", name: "Quick Math", isActive: false },
    { id: "1", name: "Memory Puzzle", isActive: true },
    { id: "2", name: "Quick Math", isActive: false },
  ],
  mindfulness: [
    { id: "5", name: "Meditation Guide", isActive: false },
    { id: "6", name: "Breathing Exercise", isActive: true },
    { id: "1", name: "Memory Puzzle", isActive: true },
    { id: "2", name: "Quick Math", isActive: false },
    { id: "1", name: "Memory Puzzle", isActive: true },
    { id: "2", name: "Quick Math", isActive: false },
  ],
  health: [
    { id: "7", name: "Diet Tracker", isActive: false },
    { id: "8", name: "Healthy Recipes", isActive: true },
    { id: "1", name: "Memory Puzzle", isActive: true },
    { id: "2", name: "Quick Math", isActive: false },
    { id: "1", name: "Memory Puzzle", isActive: true },
    { id: "2", name: "Quick Math", isActive: false },
  ],
  selfTest: [
    { id: "9", name: "Stress Level Test", isActive: true },
    { id: "1", name: "Memory Puzzle", isActive: true },
    { id: "2", name: "Quick Math", isActive: false },
    { id: "1", name: "Memory Puzzle", isActive: true },
    { id: "2", name: "Quick Math", isActive: false },
    { id: "10", name: "Sleep Quality Test", isActive: false },
  ],
};

// Context 생성
const TrainingDataContext = createContext<TrainingDataContextType | undefined>(undefined);

export const TrainingDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [gamesData, setGamesData] = useState(initialGamesData);

  const toggleGameStatus = (categoryKey: string, gameId: string) => {
    setGamesData((prevGames) => ({
      ...prevGames,
      [categoryKey]: prevGames[categoryKey].map((game) =>
        game.id === gameId ? { ...game, isActive: !game.isActive } : game
      ),
    }));
  };

  const renderGameItem = (categoryKey: string, game: Game): React.ReactNode => (
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

  const renderCategorySection = (category: Category): React.ReactNode => (
    <View key={category.key} style={styles.categoryContainer}>
      <Text style={styles.categoryTitle}>{category.title}</Text>
      <ScrollView style={styles.scrollableSection}>
        {gamesData[category.key].map((game) => renderGameItem(category.key, game))}
      </ScrollView>
    </View>
  );

  return (
    <TrainingDataContext.Provider
      value={{ categories, gamesData, toggleGameStatus, renderGameItem, renderCategorySection }}
    >
      {children}
    </TrainingDataContext.Provider>
  );
};

// Hook 생성
export const useTrainingData = () => {
  const context = useContext(TrainingDataContext);
  if (!context) {
    throw new Error("useTrainingData must be used within a TrainingDataProvider");
  }
  return context;
};

// App 컴포넌트
const App = () => {
  const { categories, renderCategorySection } = useTrainingData();

  return (
    <ScrollView style={styles.container}>
      {categories.map((category) => renderCategorySection(category))}
    </ScrollView>
  );
};

// 스타일
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
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
  categoryContainer: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  scrollableSection: {
    maxHeight: 200, // 각 카테고리의 최대 높이 지정
  },
});
