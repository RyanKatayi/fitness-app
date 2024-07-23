import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../../lib/AuthContext';

const { width } = Dimensions.get('window');

const SuccessScreen = () => {
  const router = useRouter();
  const { profile } = useAuth();

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/authentication/success.png')} style={styles.image} />
      <Text style={styles.title}>Welcome, {profile?.full_name.split(' ')[0]}</Text>
      <Text style={styles.subtitle}>
        You are all set now, let’s reach your goals together with us
      </Text>
      <TouchableOpacity onPress={() => router.push('/tabs')} style={styles.button}>
        <Text style={styles.buttonText}>Go To Home</Text>
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

export default SuccessScreen;
