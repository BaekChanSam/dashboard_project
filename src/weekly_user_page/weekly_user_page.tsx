import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function WeeklyUserPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Weekly User Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6fd5f7", 
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
  },
});
