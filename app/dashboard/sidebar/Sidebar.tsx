import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Sidebar() {
  return (
    <View style={styles.container}>
      {/* 이미지 추가 */}
      <Image
        source={{ uri: 'https://www.dailymedi.com/data/news_cont/2301/thumb-d20230103_3731733480_EIDqtLsR_89d6a8407bb1a8b6e890a0764b913ec7dab7e467_800x196.jpg' }}
        style={styles.image}
      />
      <Text style={styles.text}>Sidebar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 250,
    backgroundColor: '#f0f0f0',
    padding: 16,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
