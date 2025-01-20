 import React from "react";
 import { View, Text, StyleSheet } from "react-native";
 
 export default function QuestionsPage() {
   return (
     <View style={styles.container}>
       <Text style={styles.text}>This is the Questions Page</Text>
     </View>
   );
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: "center",
     alignItems: "center",
     backgroundColor: "#26ff67",
   },
   text: {
     fontSize: 18,
     fontWeight: "bold",
     color: "#000000",
   },
 });
 