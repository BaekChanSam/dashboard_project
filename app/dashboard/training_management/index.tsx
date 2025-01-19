import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TrainingManagement() {
  return (
    <View style={styles.container}>
      <Text>Training Management Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
