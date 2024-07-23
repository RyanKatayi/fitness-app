import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { FontAwesome, MaterialIcons, Feather } from '@expo/vector-icons';
import { useAuth } from '../../lib/AuthContext';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  const { profile } = useAuth();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.welcome}>Welcome Back,</Text>
        <Text style={styles.name}>{profile?.full_name || 'User'}</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>BMI (Body Mass Index)</Text>
          <Text style={styles.cardSubtitle}>You have a normal weight</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>View More</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.targetContainer}>
          <Text style={styles.targetTitle}>Today Target</Text>
          <TouchableOpacity style={styles.checkButton}>
            <Text style={styles.checkButtonText}>Check</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.activityStatus}>Activity Status</Text>
        <View style={styles.statusCard}>
          <Text style={styles.statusTitle}>Heart Rate</Text>
          <Text style={styles.statusValue}>78 BPM</Text>
          <Text style={styles.statusTime}>3 mins ago</Text>
        </View>
        <View style={styles.statusRow}>
          <View style={styles.statusSmallCard}>
            <Text style={styles.statusSmallTitle}>Water Intake</Text>
            <Text style={styles.statusSmallValue}>4 Liters</Text>
            <Text style={styles.statusSmallSubtitle}>Real-time updates</Text>
          </View>
          <View style={styles.statusSmallCard}>
            <Text style={styles.statusSmallTitle}>Sleep</Text>
            <Text style={styles.statusSmallValue}>8h 20m</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 80, // Increased padding to move content away from the top
  },
  scrollView: {
    paddingBottom: 80, // Ensure there's space at the bottom for the navigation bar
  },
  welcome: {
    fontSize: 16,
    color: '#aaa',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    marginTop: 10,
  },
  card: {
    backgroundColor: '#f1f1f1',
    borderRadius: 20,
    padding: 20,
    marginTop: 25,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#aaa',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#8e44ad',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  targetContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  targetTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  checkButton: {
    backgroundColor: '#8e44ad',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  checkButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  activityStatus: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  statusCard: {
    backgroundColor: '#f1f1f1',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  statusTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  statusValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8e44ad',
    marginBottom: 8,
  },
  statusTime: {
    fontSize: 14,
    color: '#aaa',
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statusSmallCard: {
    backgroundColor: '#f1f1f1',
    borderRadius: 20,
    padding: 20,
    width: width * 0.42,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,
  },
  statusSmallTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  statusSmallValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8e44ad',
    marginBottom: 8,
  },
  statusSmallSubtitle: {
    fontSize: 12,
    color: '#aaa',
  },
  navigation: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#f1f1f1',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,
  },
  navIcon: {
    fontSize: 24,
    color: '#8e44ad',
  },
});

export default HomeScreen;
