import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

const EatWell = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/onboarding/eat-well.png')} style={styles.image} />
      <Text style={styles.title}>Eat Well</Text>
      <Text style={styles.subtitle}>
        Let's start a healthy lifestyle with us, we can determine your diet every day. Healthy eating is fun
      </Text>
      <TouchableOpacity onPress={() => router.push('/onboarding/ImproveSleepQuality')} style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  image: {
    width: width * 0.75,
    height: width,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#8e44ad',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EatWell;
