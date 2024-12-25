import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const AssetsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Assets Screen</Text>
    </View>
  );
};

const NewsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>News Screen</Text>
    </View>
  );
};

export default function App() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Assets" component={AssetsScreen} />
        <Tab.Screen name="News" component={NewsScreen} />
      </Tab.Navigator>
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
