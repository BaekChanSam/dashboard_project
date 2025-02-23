import QuestionList from '@/components/question_list/question_list';
import TrainingSingleManagement from '@/components/training_management/training_single_management';
import PreferenceCircularChart from '@/components/training_stats/preference_circular_chart';
import PointChart from '@/components/usage_chart/pointChart';
import UserList from '@/components/user_list/userList';
import { View, StyleSheet } from 'react-native';

export default function DashboardIndex() {
  return (
    <View style={styles.mainContent}>
      {/* 상단 2개 컴포넌트 */}
      <View style={styles.topRow}>
        <View style={styles.leftComponent}>
          <PointChart />
        </View>
        <View style={styles.rightComponent}>
          <PreferenceCircularChart />
        </View>
      </View>

      {/* 하단 3개 컴포넌트 */}
      <View style={styles.bottomRow}>
        <View style={styles.leftComponent}>
          <QuestionList />
        </View>
        <View style={styles.centerComponent}>
          <UserList />
        </View>
        <View style={styles.rightComponent}>
          <TrainingSingleManagement />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  topRow: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 16,
  },
  bottomRow: {
    flex: 1,
    flexDirection: 'row',
  },
  leftComponent: {
    flex: 2,
    marginRight: 8,
  },
  centerComponent: {
    flex: 1,
    marginHorizontal: 8,
  },
  rightComponent: {
    flex: 2,
  },
});
