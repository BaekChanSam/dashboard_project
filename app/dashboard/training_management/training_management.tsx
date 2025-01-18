import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

const items = [
  { label: "Item 1", value: false },
  { label: "Item 2", value: true },
  { label: "Item 3", value: false },
  { label: "Item 4", value: true },
  { label: "Item 5", value: false },

];

type SelectedValues = {
  [key: string]: boolean;
};

export default function TrainingManagement() {
  const [selectedValues, setSelectedValues] = useState<SelectedValues>(
    items.reduce((acc, item) => {
      acc[item.label] = item.value;
      return acc;
    }, {} as SelectedValues)
  );

  const handleToggle = (label: string) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [label]: !prevValues[label],
    }));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {items.map((item) => (
        <View style={styles.itemContainer} key={item.label}>
          <Text style={styles.label}>{item.label}</Text>
          <View style={styles.radioButtons}>
            <TouchableOpacity
              style={[
                styles.radioButton,
                selectedValues[item.label] === true && styles.selected,
              ]}
              onPress={() => handleToggle(item.label)}
            >
              <Text style={styles.radioButtonText}>True</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.radioButton,
                selectedValues[item.label] === false && styles.selected,
              ]}
              onPress={() => handleToggle(item.label)}
            >
              <Text style={styles.radioButtonText}>False</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f8f8f8",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: "#ccc",
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
    backgroundColor: "#4caf50", // Green color for selected state
  },
  radioButtonText: {
    fontSize: 14,
    color: "#333",
  },
});