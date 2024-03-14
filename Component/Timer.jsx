import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

export default function Timer({ minutes }) {
  const [isTimerPlaying, setIsTimerPlaying] = useState(false);

  const startTimer = () => {
    setIsTimerPlaying(true);
  };

  return (
    <TouchableOpacity onPress={startTimer}>
      <CountdownCircleTimer
        isPlaying={isTimerPlaying}
        duration={minutes * 60}
        colors={[["#004777", 0.4], ["#F7B801", 0.4], ["#A30000"]]}
        onComplete={() => alert("Countdown finished!")}
      >
        {({ remainingTime, animatedColor }) => (
          <Text style={styles.timer}>
            {Math.floor(remainingTime / 60)}:
            {("0" + (remainingTime % 60)).slice(-2)}
          </Text>
        )}
      </CountdownCircleTimer>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  timer: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#333",
  },
});
