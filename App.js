import React, {useState, createContext} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import ThemeScreen from './src/useContext/ThemeScreen';
import ClickCounter from './src/useRef/ClickCounter';
import StopWatch from './src/useRef/StopWatch';

export const ThemeContext = createContext(true); //Creating and exporting context

const App = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);

  return (
    <View style={styles.rootContainer}>
      {/* <ThemeContext.Provider value={{isLightTheme, setIsLightTheme}}>
        <ThemeScreen />
      </ThemeContext.Provider> */}
      {/* <ClickCounter /> */}
      <StopWatch />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  rootContainer: {flex: 1},
});
