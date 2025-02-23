import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

// 명시적으로 라우트 타입 정의
type ValidRoutes =
  | '/dashboard/user_management'
  | '/dashboard/training_management'
  | '/dashboard/weekly_user'
  | '/dashboard/training_stats'
  | '/dashboard/questions';

const menuItems: { label: string; route: ValidRoutes }[] = [
  { label: 'User Management', route: '/dashboard/user_management' },
  { label: 'Training Management', route: '/dashboard/training_management' },
  { label: 'Weekly User', route: '/dashboard/weekly_user' },
  { label: 'Training Stats', route: '/dashboard/training_stats' },
  { label: 'Questions', route: '/dashboard/questions' },
];

export default function Sidebar() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {menuItems.map((item, index) => (
        <TouchableOpacity key={index} style={styles.menuItem} onPress={() => router.push(item.route)}>
          <Text style={styles.menuText}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  menuItem: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#444',
    borderRadius: 2,
  },
  menuText: {
    fontSize: 16,
    color: '#fff',
  },
});
