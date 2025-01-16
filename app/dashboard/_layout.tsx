import { View, StyleSheet } from 'react-native';
import Sidebar from './sidebar/Sidebar';
import { Slot } from 'expo-router';

export default function DashboardLayout() {
  return (
    <View style={styles.container}>
      <Sidebar />
      <View style={styles.content}>
        <Slot />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    padding: 16,
  },
});
