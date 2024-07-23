import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

const TrackYourGoal = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/onboarding/track-your-goal.png')} style={styles.image} />
      <Text style={styles.title}>Track Your Goal</Text>
      <Text style={styles.subtitle}>
        Don't worry if you have trouble determining your goals, We can help you determine your goals and track your goals
      </Text>
      <TouchableOpacity onPress={() => router.push('/onboarding/GetBurn')} style={styles.button}>
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
    marginBottom: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#8e44ad',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TrackYourGoal;
