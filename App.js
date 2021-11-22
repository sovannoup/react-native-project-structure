
import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import store from './src/Store/index'
import Navigation from './src/Navigation/index'
import NavigationService from './src/Service/navigationService'
import {Provider } from 'react-redux'

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <View style={{flex:1}}>
        <Navigation
            ref={navigatorRef =>
            NavigationService.setTopLevelNavigator(navigatorRef)
        }
        />
      </View>
    </Provider>
  );
};

export default App;
