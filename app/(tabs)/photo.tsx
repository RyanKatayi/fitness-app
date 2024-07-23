import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PhotoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Photo Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default PhotoScreen;
