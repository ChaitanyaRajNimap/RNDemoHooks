import React, {useRef} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const ClickCounter = () => {
  const ref = useRef(0);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.heading}>Click count : {ref.current} </Text>
      <Button
        title="Click"
        onPress={() => {
          ref.current = ref.current + 1;
          console.log('Click Count : ', ref.current);
        }}
      />
    </View>
  );
};

export default ClickCounter;

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
