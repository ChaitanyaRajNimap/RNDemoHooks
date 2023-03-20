import React, {useContext} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {ThemeContext} from '../../App';

const ThemeScreen = () => {
  const {isLightTheme, setIsLightTheme} = useContext(ThemeContext);
  return (
    <View
      style={[
        styles.rootContainer,
        {backgroundColor: isLightTheme ? '#ccc' : '#333'},
      ]}>
      <Text style={[styles.heading, {color: isLightTheme ? '#000' : '#fff'}]}>
        Theme Screen{' '}
      </Text>
      <Button
        title="Change Theme"
        onPress={() => setIsLightTheme(!isLightTheme)}
      />
    </View>
  );
};

export default ThemeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    marginBottom: 10,

    fontSize: 25,
    fontWeight: 'bold',
  },
});
