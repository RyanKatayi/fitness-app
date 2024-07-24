import React, { useReducer } from 'react';
import { View, StyleSheet, Alert, FlatList } from 'react-native';
import { TextInput, Button, Text, List, IconButton, Divider } from 'react-native-paper';
import { useRouter } from 'expo-router';
import supabase from '../../lib/supabaseClient';

interface FoodItem {
  id: number;
  FoodItem: string;
  Cals_per100grams: string;
  KJ_per100grams: string;
}

type State = {
  name: string;
  searchQuery: string;
  searchResults: FoodItem[];
  selectedFoods: FoodItem[];
};

type Action =
  | { type: 'SET_NAME'; payload: string }
  | { type: 'SET_SEARCH_QUERY'; payload: string }
  | { type: 'SET_SEARCH_RESULTS'; payload: FoodItem[] }
  | { type: 'ADD_SELECTED_FOOD'; payload: FoodItem }
  | { type: 'REMOVE_SELECTED_FOOD'; payload: number };

const initialState: State = {
  name: '',
  searchQuery: '',
  searchResults: [],
  selectedFoods: [],
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload };
    case 'SET_SEARCH_RESULTS':
      return { ...state, searchResults: action.payload };
    case 'ADD_SELECTED_FOOD':
      return { ...state, selectedFoods: [...state.selectedFoods, action.payload] };
    case 'REMOVE_SELECTED_FOOD':
      return { ...state, selectedFoods: state.selectedFoods.filter(food => food.id !== action.payload) };
    default:
      return state;
  }
};

const AddMeal = () => {
  const router = useRouter();
  const [state, dispatch] = useReducer(reducer, initialState);

  const totalCalories = state.selectedFoods.reduce((total, food) => total + parseInt(food.Cals_per100grams), 0);
  const totalKilojoules = state.selectedFoods.reduce((total, food) => total + parseInt(food.KJ_per100grams), 0);

  const handleSearch = async (query: string) => {
    dispatch({ type: 'SET_SEARCH_QUERY', payload: query });
    console.log('Search Query:', query);
    if (query.length > 2) {
      try {
        const { data, error } = await supabase
          .from('food_items')
          .select('*')
          .ilike('"FoodItem"', `%${query}%`);
        console.log('Raw Response:', { data, error });
        if (error) {
          console.error('Search Error:', error);
        } else {
          console.log('Search Results:', data);
          dispatch({ type: 'SET_SEARCH_RESULTS', payload: data });
        }
      } catch (error) {
        console.error('Unexpected Error:', error);
      }
    } else {
      dispatch({ type: 'SET_SEARCH_RESULTS', payload: [] });
    }
  };

  const handleAddMeal = async () => {
    if (!state.name || state.selectedFoods.length === 0) {
      Alert.alert('Error', 'Please enter meal name and add food items');
      return;
    }
    console.log('Adding Meal:', state.name, totalCalories, totalKilojoules, state.selectedFoods);
    try {
      const { error } = await supabase
        .from('meals')
        .insert([{ name: state.name, calories: totalCalories, kilojoules: totalKilojoules, date: new Date() }]);
      if (error) {
        Alert.alert('Error', error.message);
      } else {
        router.push('/fitness/NutritionScreen');
      }
    } catch (error) {
      console.error('Unexpected Error:', error);
    }
  };

  const renderSearchResult = ({ item }: { item: FoodItem }) => (
    <List.Item
      title={item.FoodItem}
      description={`${item.Cals_per100grams} cal/100g, ${item.KJ_per100grams} kJ/100g`}
      onPress={() => {
        dispatch({ type: 'ADD_SELECTED_FOOD', payload: item });
        dispatch({ type: 'SET_SEARCH_QUERY', payload: '' });
        dispatch({ type: 'SET_SEARCH_RESULTS', payload: [] });
      }}
      right={() => <IconButton icon="plus" onPress={() => dispatch({ type: 'ADD_SELECTED_FOOD', payload: item })} />}
    />
  );

  const renderSelectedFood = ({ item }: { item: FoodItem }) => (
    <List.Item
      title={item.FoodItem}
      description={`${item.Cals_per100grams} cal/100g, ${item.KJ_per100grams} kJ/100g`}
      right={() => (
        <IconButton
          icon="delete"
          onPress={() => dispatch({ type: 'REMOVE_SELECTED_FOOD', payload: item.id })}
        />
      )}
    />
  );

  console.log('Selected Foods:', state.selectedFoods);

  return (
    <View style={styles.container}>
      <IconButton icon="arrow-left" size={24} onPress={() => router.back()} />
      <Text style={styles.title}>Add a New Meal</Text>
      <TextInput
        label="Meal Name"
        value={state.name}
        onChangeText={(text) => dispatch({ type: 'SET_NAME', payload: text })}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Search Food Items"
        value={state.searchQuery}
        onChangeText={handleSearch}
        mode="outlined"
        style={styles.input}
      />
      {state.searchResults.length > 0 && (
        <FlatList
          data={state.searchResults}
          renderItem={renderSearchResult}
          keyExtractor={(item) => item.id.toString()}
          style={styles.searchResultsContainer}
          ItemSeparatorComponent={() => <Divider />}
        />
      )}
      <FlatList
        data={state.selectedFoods}
        renderItem={renderSelectedFood}
        keyExtractor={(item) => item.id.toString()}
        style={styles.selectedFoodsContainer}
        ItemSeparatorComponent={() => <Divider />}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total Calories: {totalCalories} cal</Text>
        <Text style={styles.totalText}>Total Kilojoules: {totalKilojoules} kJ</Text>
      </View>
      <Button mode="contained" onPress={handleAddMeal} style={styles.button}>
        Add Meal
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 20,
  },
  searchResultsContainer: {
    maxHeight: 200,
    marginBottom: 15,
  },
  selectedFoodsContainer: {
    marginTop: 10,
    maxHeight: 200,
  },
  totalContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddMeal;
