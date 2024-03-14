// CountdownTimer.js
import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
  View,
} from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

export default function CountdownTimer() {
  const [isTimerPlaying, setIsTimerPlaying] = useState(false);
  const [minutes, setMinutes] = useState(""); // State để lưu số phút được nhập
  const [isStarted, setIsStarted] = useState(false);
  const startTimer = () => {
    if (!isNaN(minutes) && parseInt(minutes) > 0) {
      setIsTimerPlaying(true);
      setIsStarted(true);
    } else {
      alert("Please enter a valid number of minutes!");
    }
  };
  return (
    <View style={styles.container}>
      {isStarted && (
        <CountdownCircleTimer
          isPlaying={isTimerPlaying}
          duration={parseInt(minutes) * 60}
          colors={[["#004777", 0.4], ["#F7B801", 0.4], ["#A30000"]]}
          onComplete={() => alert("Countdown finished!")}
          style={styles.timerContainer}
        >
          {({ remainingTime, animatedColor }) => (
            <Text style={styles.timer}>
              {Math.floor(remainingTime / 60)}:
              {("0" + (remainingTime % 60)).slice(-2)}
            </Text>
          )}
        </CountdownCircleTimer>
      )}
      <TextInput
        style={styles.input}
        value={minutes}
        onChangeText={(text) => setMinutes(text)}
        placeholder="Enter minutes"
        keyboardType="numeric"
      />
      <Button title="Start Timer" onPress={startTimer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  timerContainer: {
    marginBottom: 20,
  },
  timer: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    width: "80%",
    textAlign: "center",
  },
});
