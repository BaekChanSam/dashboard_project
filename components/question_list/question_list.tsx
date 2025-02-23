import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import questionsData from '../../mock/questions.json'; // import로 JSON 데이터를 불러오기
import { ToastViewport, useToastController } from '@tamagui/toast';
import { Toast } from '../toast/toast';

// Question 타입 정의
type Question = {
  id: string;
  title: string;
  author: string;
  date: string;
};

export default function QuestionList() {
  const [questions, setQuestions] = useState<Question[]>([]);

  const toast = useToastController();

  useEffect(() => {
    // JSON 데이터를 상태로 설정
    setQuestions(questionsData);
  }, []);

  const handleDelete = (id: string) => {
    setQuestions((prevQuestions) => prevQuestions.filter((question) => question.id !== id));

    toast.show(`number ${id} delete!`);
  };

  const renderQuestionItem = ({ item }: { item: Question }) => (
    <View style={styles.row}>
      <Text style={[styles.cell, styles.centerText]}>{item.id}</Text>
      <Text style={styles.cell}>{item.title}</Text>
      <Text style={styles.cell}>{item.author}</Text>
      <Text style={styles.cell}>{item.date}</Text>
      <TouchableOpacity onPress={() => handleDelete(item.id)} style={[styles.cell, styles.deleteButton]}>
        <Text style={styles.deleteText}>✘</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <ToastViewport flexDirection="column" bottom={10} left={0} right={0} />

      {/* 테이블 헤더 */}
      <View style={[styles.row, styles.header]}>
        <Text style={[styles.cell, styles.centerText]}>번호</Text>
        <Text style={styles.cell}>제목</Text>
        <Text style={styles.cell}>작성자</Text>
        <Text style={styles.cell}>작성일</Text>
        <Text style={[styles.cell, styles.centerText]}>삭제</Text>
      </View>

      {/* 테이블 데이터 */}
      <FlatList data={questions} keyExtractor={(item) => item.id} renderItem={renderQuestionItem} contentContainerStyle={styles.listContainer} />
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
    marginBottom: 20,
    textAlign: 'center',
  },
  listContainer: {
    paddingBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  header: {
    backgroundColor: '#e0e0e0',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomWidth: 2,
    borderBottomColor: '#bbb',
  },
  cell: {
    flex: 1,
    paddingHorizontal: 5,
    fontSize: 14,
    color: '#333',
  },
  centerText: {
    textAlign: 'center',
  },
  deleteButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
