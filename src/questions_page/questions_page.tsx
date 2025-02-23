import QuestionList from '@/components/question_list/question_list';
import { Toast } from '@/components/toast/toast';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function QuestionsPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Questions Page</Text>
      {/* QuestionList 컴포넌트 호출 */}
      <QuestionList />

      <Toast />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,

    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});
