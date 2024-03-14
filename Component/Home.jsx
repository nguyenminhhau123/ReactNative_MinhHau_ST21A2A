// Home.js
import React from "react";
import { StyleSheet, View } from "react-native";
import CountdownTimer from "./CountdownTimer";

export default function Home() {
  return (
    <View style={styles.container}>
      <CountdownTimer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
