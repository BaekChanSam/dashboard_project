import React from "react";
import { View, StyleSheet } from "react-native";
import { Stack } from "expo-router";

export default function UserManagementLayout() {
  return (
    <View style={styles.container}>
      <Stack />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
