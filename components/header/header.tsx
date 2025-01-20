import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: "https://www.dailymedi.com/data/news_cont/2301/thumb-d20230103_3731733480_EIDqtLsR_89d6a8407bb1a8b6e890a0764b913ec7dab7e467_500x122.jpg" }} 
        style={styles.logo} 
        resizeMode="contain" 
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  logo: {
    width: 120  ,
    height: 80,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});
