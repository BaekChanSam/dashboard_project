import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";

const users = [
  "Isaac", "Jack", "Katie", "Liam", "Mona", "Nate", "Olivia", "Paul", "Quinn",
  "Isaac", "Jack", "Katie", "Liam", "Mona", "Nate", "Olivia", "Paul", "Quinn",
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
          contentContainerStyle={styles.flatListContainer} // 수정된 부분
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "flex-start", // 리스트를 위로 정렬
    alignItems: "center", // 가로 중앙 정렬
    padding: 16,
    backgroundColor: "#f8f8f8", // 배경색 (확인용)
  },
  container: {
    width: "100%", // 너비를 100%로 설정하여 화면 크기에 맞추기
    maxHeight: 400, // 최대 높이 설정
    borderWidth: 1, // 테두리 추가 (시각적으로 박스를 구분)
    borderColor: "#ccc",
    borderRadius: 8,
    overflow: "hidden", // 경계선 넘어가는 부분 숨김
    backgroundColor: "#ffcc00",
  },
  flatListContainer: {
    // contentContainerStyle 스타일을 ViewStyle로 변경
    flexGrow: 1,
    paddingVertical: 16,
    paddingHorizontal: 8, // 가로 여백
    justifyContent: "flex-start", // 내용 상단 정렬
  },
  userContainer: {
    marginVertical: 8,
  },
  userText: {
    fontSize: 18,
    color: "#333",
  },
});
