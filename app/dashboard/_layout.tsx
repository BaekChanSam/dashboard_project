import { View, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import Header from '@/components/header/header';
import Sidebar from '@/components/sidebar/sidebar';

export default function DashboardLayout() {
  return (
    <View style={styles.container}>
      {/* 공통 헤더 */}
      <View style={styles.header}>
        <Header />
      </View>

      <View style={styles.body}>
        {/* 공통 사이드바 */}
        <View style={styles.sidebar}>
          <Sidebar />
        </View>

        {/* 페이지 컨텐츠 */}
        <View style={styles.content}>
          <Stack screenOptions={{ headerShown: false }} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  body: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    width: 200,
    backgroundColor: '#333',
  },
  content: {
    flex: 1,
    padding: 16,
  },
});
