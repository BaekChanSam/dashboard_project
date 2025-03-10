import TrainingMultiManagement from '@/src/components/training_management/training_multi_management';
import { View, StyleSheet } from 'react-native';

export default function TrainingManagementPage() {
  return (
    <View style={styles.container}>
      <TrainingMultiManagement />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
});
