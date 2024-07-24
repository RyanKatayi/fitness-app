import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import supabase from '../../../lib/supabaseClient';

const { width } = Dimensions.get('window');

type Meal = {
  id: number;
  name: string;
  calories: number;
  date: string;
  // Add other properties if necessary
};

const NutritionScreen = () => {
  const router = useRouter();
  const [meals, setMeals] = useState<any[]>([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const { data, error } = await supabase
        .from('meals')
        .select('*')
        .order('date', { ascending: false });
      if (error) {
        console.error(error);
      } else {
        setMeals(data as any[]);
      }
    };
    fetchMeals();
  }, []);

  const renderMealItem = ({ item }: { item: Meal }) => (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.mealName}>{item.name}</Text>
        <Text style={styles.calories}>{item.calories} calories</Text>
        <Text style={styles.date}>{new Date(item.date).toLocaleString()}</Text>
      </View>
      <Image
        source={{ uri: 'https://your-image-url.com/meal.png' }} // Replace with your meal image URL
        style={styles.mealImage}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Meals</Text>
      <FlatList
        data={meals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
      />
      <TouchableOpacity onPress={() => router.push('/fitnessScreens/AddMeal')} style={styles.addButton}>
        <Text style={styles.addButtonText}>Add Meal</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    marginTop: 55,
  },
  listContent: {
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#f8f8f8',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardContent: {
    flex: 1,
  },
  mealName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  calories: {
    fontSize: 16,
    color: '#888',
    marginBottom: 5,
  },
  date: {
    fontSize: 14,
    color: '#aaa',
  },
  mealImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginLeft: 10,
  },
  addButton: {
    backgroundColor: '#8e44ad',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    margin: 20,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default NutritionScreen;