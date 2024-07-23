import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

const ImproveSleepQuality = () => {
  const router = useRouter();

  const handlePress = () => {
    console.log('Get Started button pressed');
    router.push('/authentication/AuthForm');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/onboarding/improve-sleep-quality.png')} style={styles.image} />
      <Text style={styles.title}>Improve Sleep Quality</Text>
      <Text style={styles.subtitle}>
        Improve the quality of your sleep with us, good quality sleep can bring a good mood in the morning
      </Text>
      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
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

export default ImproveSleepQuality;
