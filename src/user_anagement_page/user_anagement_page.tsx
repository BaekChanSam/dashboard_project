import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";

type User = {
  id: string;
  name: string;
  age: number;
  joinedDate: string;
  isActive: boolean;
};

export default function UserManagementPage() {
  const [users, setUsers] = useState<User[]>([
    { id: "1", name: "John Doe", age: 30, joinedDate: "2023-01-15", isActive: true },
    { id: "2", name: "Jane Smith", age: 25, joinedDate: "2023-05-20", isActive: false },
    { id: "3", name: "Alex Johnson", age: 40, joinedDate: "2022-12-01", isActive: true },
    { id: "1", name: "John Doe", age: 30, joinedDate: "2023-01-15", isActive: true },
    { id: "2", name: "Jane Smith", age: 25, joinedDate: "2023-05-20", isActive: false },
    { id: "3", name: "Alex Johnson", age: 40, joinedDate: "2022-12-01", isActive: true },
    { id: "1", name: "John Doe", age: 30, joinedDate: "2023-01-15", isActive: true },
    { id: "2", name: "Jane Smith", age: 25, joinedDate: "2023-05-20", isActive: false },
    { id: "3", name: "Alex Johnson", age: 40, joinedDate: "2022-12-01", isActive: true },
  ]);

  const toggleAccountStatus = (id: string) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, isActive: !user.isActive } : user
      )
    );
  };

  const renderUserItem = ({ item }: { item: User }) => (
    <View style={styles.userItem}>
      <Text style={styles.userInfo}>
        <Text style={styles.label}>Name:</Text> {item.name}
      </Text>
      <Text style={styles.userInfo}>
        <Text style={styles.label}>Age:</Text> {item.age}
      </Text>
      <Text style={styles.userInfo}>
        <Text style={styles.label}>Joined:</Text> {item.joinedDate}
      </Text>
      <TouchableOpacity
        style={[styles.button, item.isActive ? styles.activeButton : styles.inactiveButton]}
        onPress={() => toggleAccountStatus(item.id)}
      >
        <Text style={styles.buttonText}>
          {item.isActive ? "Deactivate" : "Activate"}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Management</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={renderUserItem} // renderItem 타입이 명시됨
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  userItem: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  userInfo: {
    fontSize: 16,
    marginBottom: 5,
  },
  label: {
    fontWeight: "bold",
  },
  button: {
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  activeButton: {
    backgroundColor: "#ff6666",
  },
  inactiveButton: {
    backgroundColor: "#66cc66",
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});
