import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Sidebar() {
  return (
    <View style={styles.container}>
      <Text>Sidebar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 250,
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
});
