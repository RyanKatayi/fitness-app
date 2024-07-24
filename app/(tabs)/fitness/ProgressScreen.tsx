import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import supabase from '../../../lib/supabaseClient';

const ProgressScreen = () => {
  const router = useRouter();
  const [progress, setProgress] = useState<any[]>([]);

  useEffect(() => {
    const fetchProgress = async () => {
      const { data, error } = await supabase
        .from('progress')
        .select('*')
        .order('date', { ascending: false });
      if (error) {
        console.error(error);
      } else {
        setProgress(data as any[]);
      }
    };
    fetchProgress();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={progress}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.weight} {item.unit}</Text>
            <Text>{new Date(item.date).toLocaleString()}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <TouchableOpacity onPress={() => router.push('fitnessScreens/AddProgress')} style={styles.addButton}>
        <Text style={styles.addButtonText}>Add Progress</Text>
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

export default ProgressScreen;