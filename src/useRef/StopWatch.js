import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const StopWatch = () => {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  const handleStart = () => {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
  };

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.heading}>
        Time passed: {secondsPassed.toFixed(3)}{' '}
      </Text>
      <Button title="Start" onPress={handleStart} />
      <Button title="Stop" onPress={handleStop} />
    </View>
  );
};

export default StopWatch;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    marginBottom: 10,
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
