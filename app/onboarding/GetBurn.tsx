import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

const GetBurn = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/onboarding/get-burn.png')} style={styles.image} />
      <Text style={styles.title}>Get Burn</Text>
      <Text style={styles.subtitle}>
        Let's keep burning, to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever
      </Text>
      <TouchableOpacity onPress={() => router.push('/onboarding/EatWell')} style={styles.button}>
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
    width:width * 0.75,
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

export default GetBurn;
