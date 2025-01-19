import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function WeeklyUser() {
  return (
    <View style={styles.container}>
      <Text>Questions Page</Text>
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
