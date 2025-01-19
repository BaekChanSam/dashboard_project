import React from "react";
import { View, StyleSheet } from "react-native";
import { Stack } from "expo-router";

export default function TrainingManagementLayout() {
  return (
    <View style={styles.container}>
      {/* 여기에 Training Management의 공통 요소를 추가할 수 있습니다 */}
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
