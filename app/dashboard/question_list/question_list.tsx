import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";

const inquiries = [
  { name: "Alice", message: "How do I reset my password?" },
  { name: "Bob", message: "Can I change my subscription plan?" },
  { name: "Charlie", message: "Where can I find the user manual?" },
  { name: "David", message: "What is the refund policy?" },
  { name: "Eve", message: "Is there a mobile app available?" },
  { name: "David", message: "What is the refund policy?" },
  { name: "Eve", message: "Is there a mobile app available?" },
];

export default function QuestionList() {
  return (
    <View style={styles.container}>
      <FlatList
        data={inquiries}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.nameText}>{item.name}</Text>
            <Text style={styles.messageText}>{item.message}</Text>
          </View>
        )}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 16,
  },
  flatListContent: {
    paddingBottom: 16,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  nameText: {
    fontWeight: "bold",
    marginRight: 8,
    color: "#333",
    flex: 1,
  },
  messageText: {
    alignItems:"flex-end",
    color: "#555",
    flex: 3,
  },
});
