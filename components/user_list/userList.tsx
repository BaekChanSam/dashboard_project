import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import usersData from '../../mock/mock_users.json';
import { Activity, Airplay } from '@tamagui/lucide-icons';
import { Button } from 'tamagui';

type User = {
  id: string;
  name: string;
  age: number;
  joinedDate: string;
  isActive: boolean;
};

export default function UserList() {
  // 상태 변수: 사용자 데이터를 관리
  const [users, setUsers] = useState<User[]>([]);

  // 컴포넌트 마운트 시 JSON 데이터를 가져와 상태로 설정
  useEffect(() => {
    // mock_users.json 데이터를 상태로 설정
    setUsers(usersData);
  }, []);

  /**
   * 사용자 계정 상태(활성화/비활성화) 토글 함수
   */
  const toggleAccountStatus = (id: string) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        // 해당 ID의 상태 변경
        user.id === id ? { ...user, isActive: !user.isActive } : user,
      ),
    );
  };

  /**
   * 사용자 항목 렌더링 함수
   */
  const renderUserItem = ({ item }: { item: User }) => (
    <View style={styles.userItem}>
      {/* 사용자 이름 */}
      <Text style={styles.userInfo}>
        <Text style={styles.label}>Name:</Text> {item.name}
      </Text>

      {/* 사용자 나이 */}
      <Text style={styles.userInfo}>
        <Text style={styles.label}>Age:</Text> {item.age}
      </Text>

      {/* 사용자 가입일 */}
      <Text style={styles.userInfo}>
        <Text style={styles.label}>Joined:</Text> {item.joinedDate}
      </Text>

      <Button
        style={[styles.button, item.isActive ? styles.activeButton : styles.inactiveButton]}
        // 버튼 클릭 시 상태 토글
        onPress={() => toggleAccountStatus(item.id)}
      >
        <Text style={styles.buttonText}>
          {/* 상태에 따라 버튼 텍스트 변경 */}
          {item.isActive ? 'Deactivate' : 'Activate'}
        </Text>
      </Button>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* 사용자 목록을 FlatList로 렌더링 */}
      <FlatList
        // 데이터 소스: 상태로 관리되는 사용자 목록
        data={users}
        // 각 항목의 고유 키
        keyExtractor={(item) => item.id}
        // 항목 렌더링 함수
        renderItem={renderUserItem}
        // FlatList 스타일
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

// 스타일 정의
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  listContainer: {
    paddingBottom: 20,
  },
  userItem: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  userInfo: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333333',
  },
  label: {
    fontWeight: 'bold',
  },
  button: {
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  activeButton: {
    // 활성화 상태 버튼 색상
    backgroundColor: '#ff6666',
  },
  inactiveButton: {
    // 비활성화 상태 버튼 색상
    backgroundColor: '#66cc66',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
