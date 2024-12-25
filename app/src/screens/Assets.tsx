import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useGetCryptoAssetsQuery } from "../services/assetsApi";

const AssetsScreen = () => {
  const { data, error, isLoading } = useGetCryptoAssetsQuery();

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Assets Screen</Text>
    </View>
  );
};

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

export default AssetsScreen;