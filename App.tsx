import 'react-native-gesture-handler';
import React from 'react';

import {Tabs} from './src/navigator/Tabs';
import {NavigationContainer} from '@react-navigation/native';

// import {Navigator} from './src/navigation/Navigator';
const App = () => {
  return (
    <NavigationContainer>
      {/* <Navigator /> */}
      <Tabs />
    </NavigationContainer>
  );
};

export default App;
