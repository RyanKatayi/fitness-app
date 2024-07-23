import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions, Alert, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePicker from '@react-native-community/datetimepicker';

const { width } = Dimensions.get('window');

const ProfileCompletion = () => {
  const router = useRouter();
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [weight, setWeight] = useState('');
  const [weightUnit, setWeightUnit] = useState('kg');
  const [height, setHeight] = useState('');
  const [heightUnit, setHeightUnit] = useState('cm');

  const handleNext = () => {
    if (!gender || !dob || !weight || !height) {
      Alert.alert('Error', 'Please fill all the fields.');
      return;
    }

    // Proceed to the next screen or submit the data
    router.push('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's complete your profile</Text>
      <RNPickerSelect
        onValueChange={(value) => setGender(value)}
        items={[
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' },
          { label: 'Non-binary', value: 'non-binary' },
          { label: 'Prefer not to say', value: 'prefer-not-to-say' },
          { label: 'Other', value: 'other' },
        ]}
        style={pickerSelectStyles}
        placeholder={{ label: 'Choose Gender', value: null }}
      />
      <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.datePicker}>
        <Text style={styles.datePickerText}>
          {dob.toLocaleDateString('en-GB')}
        </Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={dob}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowDatePicker(Platform.OS === 'ios');
            if (selectedDate) setDob(selectedDate);
          }}
        />
      )}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your Weight"
          style={styles.input}
          value={weight}
          onChangeText={setWeight}
          keyboardType="numeric"
        />
        <RNPickerSelect
          onValueChange={(value) => setWeightUnit(value)}
          items={[
            { label: 'kg', value: 'kg' },
            { label: 'lbs', value: 'lbs' },
          ]}
          style={unitPickerStyles}
          value={weightUnit}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your Height"
          style={styles.input}
          value={height}
          onChangeText={setHeight}
          keyboardType="numeric"
        />
        <RNPickerSelect
          onValueChange={(value) => setHeightUnit(value)}
          items={[
            { label: 'cm', value: 'cm' },
            { label: 'ft', value: 'ft' },
            { label: 'in', value: 'in' },
          ]}
          style={unitPickerStyles}
          value={heightUnit}
        />
      </View>
      <TouchableOpacity onPress={handleNext} style={styles.button}>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  datePicker: {
    width: width * 0.8,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  datePickerText: {
    color: '#aaa',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.8,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f1f1f1',
    paddingHorizontal: 20,
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
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    width: width * 0.8,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f1f1f1',
    paddingHorizontal: 20,
    marginBottom: 15,
    color: '#aaa',
  },
  inputAndroid: {
    width: width * 0.8,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f1f1f1',
    paddingHorizontal: 20,
    marginBottom: 15,
    color: '#aaa',
  },
});

const unitPickerStyles = StyleSheet.create({
  inputIOS: {
    width: 60,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f1f1f1',
    paddingHorizontal: 20,
    marginLeft: 10,
    color: '#aaa',
  },
  inputAndroid: {
    width: 60,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f1f1f1',
    paddingHorizontal: 20,
    marginLeft: 10,
    color: '#aaa',
  },
});

export default ProfileCompletion;
