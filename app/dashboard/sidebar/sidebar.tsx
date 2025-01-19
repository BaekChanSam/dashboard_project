import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const menuItems = [
  { label: "User Management", onPress: () => console.log("User Management") },
  { label: "Training management", onPress: () => console.log("Training Management") },
  { label: "Weekly User", onPress: () => console.log("Weekly User") },
  { label: "Training Stats", onPress: () => console.log("Training Stats") },
  { label: "Questions", onPress: () => console.log("Questions") },
];

export default function Sidebar() {
  return (
    <View style={styles.container}>
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.menuItem}
          onPress={item.onPress}
        >
          <Text style={styles.menuText}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  menuItem: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#444",
    borderRadius: 2,
  },
  menuText: {
    fontSize: 16,
    color: "#fff",
  },
});
