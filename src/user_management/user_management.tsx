import UserList from '@/components/user_list/userList';
import { View, Text, StyleSheet } from 'react-native';

export default function UserManagementPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Management Page</Text>
      {/* UserList 컴포넌트 호출 */}
      <UserList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});
