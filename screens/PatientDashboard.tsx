import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Dummy data for prototyping
const dummyPatientData = {
  name: 'John Doe',
  upcomingAppointments: [
    { id: 1, doctor: 'Dr. Smith', date: '2024-03-20', time: '10:00 AM' },
    { id: 2, doctor: 'Dr. Johnson', date: '2024-03-25', time: '2:30 PM' },
  ],
  prescriptions: [
    { id: 1, name: 'Amoxicillin', dosage: '500mg', frequency: 'Twice daily', remaining: 5 },
    { id: 2, name: 'Ibuprofen', dosage: '400mg', frequency: 'As needed', remaining: 15 },
  ],
  nearbyPharmacies: [
    { id: 1, name: 'HealthPlus Pharmacy', distance: '0.5 km', hasMedicine: true },
    { id: 2, name: 'MediCare Pharmacy', distance: '1.2 km', hasMedicine: false },
    { id: 3, name: 'Wellness Pharmacy', distance: '2.0 km', hasMedicine: true },
  ],
};

export const PatientDashboard = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  // Dummy functions for buttons
  const handleUploadPrescription = () => {
    Alert.alert(
      'Upload Prescription',
      'This would open the camera/gallery to upload prescription',
      [{ text: 'OK' }]
    );
  };

  const handleFindPharmacy = () => {
    Alert.alert(
      'Find Pharmacy',
      'This would open a map with nearby pharmacies',
      [{ text: 'OK' }]
    );
  };

  const handleBookAppointment = () => {
    Alert.alert(
      'Book Appointment',
      'This would open the appointment booking screen',
      [{ text: 'OK' }]
    );
  };

  const handleChat = () => {
    navigation.navigate('Chat');
  };

  const handleRequestRefill = (medicineName: string) => {
    Alert.alert(
      'Request Refill',
      `Refill request sent for ${medicineName}`,
      [{ text: 'OK' }]
    );
  };

  const handleCheckStock = (pharmacyName: string) => {
    Alert.alert(
      'Check Stock',
      `Checking stock at ${pharmacyName}...\n\nCurrent stock: 25 units`,
      [{ text: 'OK' }]
    );
  };

  const handleSettings = () => {
    navigation.navigate('Settings');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Welcome, {dummyPatientData.name}</Text>
          <TouchableOpacity style={styles.settingsButton} onPress={handleSettings}>
            <Text style={styles.settingsButtonText}>⚙️</Text>
          </TouchableOpacity>
        </View>

        {/* Quick Actions Section */}
        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.actionButton} onPress={handleUploadPrescription}>
            <View style={styles.actionIcon}>
              <Text style={styles.actionIconText}>📝</Text>
            </View>
            <Text style={styles.actionText}>Upload Prescription</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={handleFindPharmacy}>
            <View style={styles.actionIcon}>
              <Text style={styles.actionIconText}>🔍</Text>
            </View>
            <Text style={styles.actionText}>Find Pharmacy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={handleBookAppointment}>
            <View style={styles.actionIcon}>
              <Text style={styles.actionIconText}>📅</Text>
            </View>
            <Text style={styles.actionText}>Book Appointment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={handleChat}>
            <View style={styles.actionIcon}>
              <Text style={styles.actionIconText}>💬</Text>
            </View>
            <Text style={styles.actionText}>Chat Assistant</Text>
          </TouchableOpacity>
        </View>

        {/* Medicine Monitoring Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Medicine Monitoring</Text>
          {dummyPatientData.prescriptions.map((prescription) => (
            <TouchableOpacity key={prescription.id} style={styles.card}>
              <View style={styles.medicineHeader}>
                <Text style={styles.cardTitle}>{prescription.name}</Text>
                <View style={[
                  styles.stockIndicator,
                  prescription.remaining <= 5 ? styles.lowStock : styles.goodStock
                ]}>
                  <Text style={styles.stockText}>
                    {prescription.remaining <= 5 ? 'Low Stock' : 'Good Stock'}
                  </Text>
                </View>
              </View>
              <Text>Dosage: {prescription.dosage}</Text>
              <Text>Frequency: {prescription.frequency}</Text>
              <Text>Remaining: {prescription.remaining} units</Text>
              {prescription.remaining <= 5 && (
                <TouchableOpacity 
                  style={styles.refillButton}
                  onPress={() => handleRequestRefill(prescription.name)}
                >
                  <Text style={styles.refillButtonText}>Request Refill</Text>
                </TouchableOpacity>
              )}
            </TouchableOpacity>
          ))}
        </View>

        {/* Nearby Pharmacies Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Nearby Pharmacies</Text>
          {dummyPatientData.nearbyPharmacies.map((pharmacy) => (
            <TouchableOpacity key={pharmacy.id} style={styles.card}>
              <View style={styles.pharmacyHeader}>
                <Text style={styles.cardTitle}>{pharmacy.name}</Text>
                <Text style={styles.distance}>{pharmacy.distance}</Text>
              </View>
              <View style={styles.availabilityContainer}>
                <Text style={styles.availabilityText}>
                  Medicine Available: {pharmacy.hasMedicine ? '✅' : '❌'}
                </Text>
                {pharmacy.hasMedicine && (
                  <TouchableOpacity 
                    style={styles.checkButton}
                    onPress={() => handleCheckStock(pharmacy.name)}
                  >
                    <Text style={styles.checkButtonText}>Check Stock</Text>
                  </TouchableOpacity>
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Upcoming Appointments Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upcoming Appointments</Text>
          {dummyPatientData.upcomingAppointments.map((appointment) => (
            <TouchableOpacity key={appointment.id} style={styles.card}>
              <Text style={styles.cardTitle}>{appointment.doctor}</Text>
              <Text>Date: {appointment.date}</Text>
              <Text>Time: {appointment.time}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#007AFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  settingsButton: {
    padding: 8,
  },
  settingsButtonText: {
    fontSize: 24,
  },
  quickActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  actionButton: {
    alignItems: 'center',
    width: '25%',
    marginBottom: 10,
  },
  actionIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  actionIconText: {
    fontSize: 24,
  },
  actionText: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
  section: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#007AFF',
  },
  medicineHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  stockIndicator: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  lowStock: {
    backgroundColor: '#FFE0E0',
  },
  goodStock: {
    backgroundColor: '#E0FFE0',
  },
  stockText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  refillButton: {
    backgroundColor: '#007AFF',
    padding: 8,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  refillButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  pharmacyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  distance: {
    color: '#666',
    fontSize: 14,
  },
  availabilityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  availabilityText: {
    fontSize: 14,
    color: '#333',
  },
  checkButton: {
    backgroundColor: '#4CAF50',
    padding: 8,
    borderRadius: 5,
  },
  checkButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
}); 