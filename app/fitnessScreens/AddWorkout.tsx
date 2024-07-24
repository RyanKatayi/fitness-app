import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import supabase from '../../lib/supabaseClient';

const AddWorkout = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [duration, setDuration] = useState('');
  const [calories, setCalories] = useState('');

  const handleAddWorkout = async () => {
    const { error } = await supabase
      .from('workouts')
      .insert({ name, duration: parseInt(duration), calories: parseInt(calories), date: new Date() });
    if (error) {
      Alert.alert('Error', error.message);
    } else {
      router.push('/fitness/WorkoutsScreen');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Workout Name" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholder="Duration (minutes)" value={duration} onChangeText={setDuration} style={styles.input} keyboardType="numeric" />
      <TextInput placeholder="Calories Burned" value={calories} onChangeText={setCalories} style={styles.input} keyboardType="numeric" />
      <TouchableOpacity onPress={handleAddWorkout} style={styles.button}>
        <Text style={styles.buttonText}>Add Workout</Text>
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

export default AddWorkout;
