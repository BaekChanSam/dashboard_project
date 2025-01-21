import React, { createContext, useContext, useState, ReactNode } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

type Game = {
  id: string;
  name: string;
  isActive: boolean;
};

type TrainingDataContextType = {
  categories: { key: string; title: string }[];
  gamesData: Record<string, Game[]>;
  toggleGameStatus: (categoryKey: string, id: string) => void;
  getGameStatusComponent: (
    categoryKey: string,
    gameId: string,
    onToggle: () => void
  ) => React.ReactElement | null;
};

const TrainingDataContext = createContext<TrainingDataContextType | undefined>(undefined);

const categories = [
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

export const TrainingDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [gamesData, setGamesData] = useState(initialGamesData);

  const toggleGameStatus = (categoryKey: string, id: string) => {
    setGamesData((prevGames) => ({
      ...prevGames,
      [categoryKey]: prevGames[categoryKey].map((game) =>
        game.id === id ? { ...game, isActive: !game.isActive } : game
      ),
    }));
  };

  const getGameStatusComponent = (
    categoryKey: string,
    gameId: string,
    onToggle: () => void
  ): React.ReactElement | null => {
    const game = gamesData[categoryKey].find((g) => g.id === gameId);
    if (!game) return null;

    return (
      <View style={styles.itemContainer}>
        <Text style={styles.label}>{game.name}</Text>
        <View style={styles.radioButtons}>
          <TouchableOpacity
            style={[styles.radioButton, game.isActive && styles.selected]}
            onPress={onToggle}
          >
            <Text style={styles.radioButtonText}>True</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.radioButton, !game.isActive && styles.selected]}
            onPress={onToggle}
          >
            <Text style={styles.radioButtonText}>False</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <TrainingDataContext.Provider value={{ categories, gamesData, toggleGameStatus, getGameStatusComponent }}>
      {children}
    </TrainingDataContext.Provider>
  );
};

export const useTrainingData = () => {
  const context = useContext(TrainingDataContext);
  if (!context) throw new Error("useTrainingData must be used within a TrainingDataProvider");
  return context;
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 16,
  },
  label: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  radioButtons: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioButton: {
    padding: 8,
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
  },
  selected: {
    backgroundColor: "#4caf50",
  },
  radioButtonText: {
    fontSize: 14,
    color: "#333",
  },
});
