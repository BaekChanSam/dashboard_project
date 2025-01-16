import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";

const users = [
  "Isaac", "Jack", "Katie", "Liam", "Mona", "Nate", "Olivia", "Paul", "Quinn",
  "Isaac", "Jack", "Katie", "Liam", "Mona", "Nate", "Olivia", "Paul", "Quinn",
  "Isaac", "Jack", "Katie", "Liam", "Mona", "Nate", "Olivia", "Paul", "Quinn",
];

export default function UserList() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <FlatList
          data={users}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.userContainer}>
              <Text style={styles.userText}>{index + 1}. {item}</Text>
            </View>
          )}
          contentContainerStyle={styles.flatList}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center", // 세로 중앙 정렬
    alignItems: "flex-end", // 가로 오른쪽 정렬
    padding: 16,
    backgroundColor: "#f8f8f8", // 배경색 (확인용)
  },
  container: {

    borderWidth: 1, // 테두리 추가 (시각적으로 박스를 구분)
    borderColor: "#ccc",
    borderRadius: 8,
    overflow: "hidden", // 경계선 넘어가는 부분 숨김
    backgroundColor: "#ffcc00",
  },
  flatList: {
    flexGrow: 1,
    alignItems: "flex-end",
    padding: 16,
  },
  userContainer: {
    marginVertical: 8,
  },
  userText: {
    fontSize: 18,
    color: "#333",
  },
});

