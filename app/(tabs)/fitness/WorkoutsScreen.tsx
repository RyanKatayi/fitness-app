import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import supabase from '../../../lib/supabaseClient';

const WorkoutsScreen = () => {
  const router = useRouter();
  const [workouts, setWorkouts] = useState<any[]>([]);


  useEffect(() => {
    const fetchWorkouts = async () => {
      const { data, error } = await supabase
        .from('workouts')
        .select('*')
        .order('date', { ascending: false });
      if (error) {
        console.error(error);
      } else {
        setWorkouts(data);
      }
    };
    fetchWorkouts();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={workouts}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
            <Text>{item.duration} minutes</Text>
            <Text>{item.calories} calories</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <TouchableOpacity onPress={() => router.push('/fitnessScreens/AddWorkout')} style={styles.addButton}>
        <Text style={styles.addButtonText}>Add Workout</Text>
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
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  addButton: {
    backgroundColor: '#8e44ad',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default WorkoutsScreen;
