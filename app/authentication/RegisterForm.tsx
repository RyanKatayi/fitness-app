import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import supabase from '../../lib/supabaseClient';

const { width } = Dimensions.get('window');

const RegisterForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleRegister = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      Alert.alert('Registration Error', error.message);
    } else {
      const userId = data.user?.id;
      if (userId) {
        const { error: profileError } = await supabase
          .from('profiles')
          .insert([{ id: userId, full_name: fullName, phone_number: phoneNumber }]);

        if (profileError) {
          Alert.alert('Profile Creation Error', profileError.message);
        } else {
          router.push('/authentication/SuccessScreen');
        }
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hey there,</Text>
      <Text style={styles.subtitle}>Create an Account</Text>
      <TextInput placeholder="Full Name" style={styles.input} value={fullName} onChangeText={setFullName} />
      <TextInput placeholder="Phone Number" style={styles.input} value={phoneNumber} onChangeText={setPhoneNumber} />
      <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} value={password} onChangeText={setPassword} />
      <View style={styles.termsContainer}>
        <Text style={styles.termsText}>By continuing you accept our</Text>
        <TouchableOpacity>
          <Text style={styles.termsLink}> Privacy Policy</Text>
        </TouchableOpacity>
        <Text style={styles.termsText}> and</Text>
        <TouchableOpacity>
          <Text style={styles.termsLink}> Term of Use</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleRegister} style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>Or</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity onPress={() => {}} style={styles.socialButton}>
          <Text style={styles.socialButtonText}>G</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.socialButton}>
          <Text style={styles.socialButtonText}>F</Text>
        </TouchableOpacity>
      </View>
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#aaa',
    marginBottom: 30,
  },
  input: {
    width: width * 0.8,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f1f1f1',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  termsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  termsText: {
    fontSize: 14,
    color: '#aaa',
  },
  termsLink: {
    fontSize: 14,
    color: '#8e44ad',
  },
  button: {
    width: width * 0.8,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#8e44ad',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    fontSize: 16,
    color: '#aaa',
    marginBottom: 20,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.4,
    marginBottom: 20,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default RegisterForm;
