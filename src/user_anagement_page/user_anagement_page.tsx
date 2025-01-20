import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function UserManagementPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the User Management Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffcc00",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
  },
});
