import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { store } from './store';

// Screens
import AssetsScreen from './src/screens/Assets';

const Tab = createBottomTabNavigator();



const NewsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>News Screen</Text>
    </View>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <Tab.Navigator>
        <Tab.Screen name="Assets" component={AssetsScreen} />
        <Tab.Screen name="News" component={NewsScreen} />
      </Tab.Navigator>
    </Provider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
