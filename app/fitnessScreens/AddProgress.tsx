import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import supabase from '../../lib/supabaseClient';

const AddProgress = () => {
  const router = useRouter();
  const [weight, setWeight] = useState('');

  const handleAddProgress = async () => {
    const { error } = await supabase
      .from('progress')
      .insert({ weight: parseFloat(weight), date: new Date() });
    if (error) {
      Alert.alert('Error', error.message);
    } else {
      router.push('/fitness/ProgressScreen');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Weight" value={weight} onChangeText={setWeight} style={styles.input} keyboardType="numeric" />
      <TouchableOpacity onPress={handleAddProgress} style={styles.button}>
        <Text style={styles.buttonText}>Add Progress</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#8e44ad',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default AddProgress;
