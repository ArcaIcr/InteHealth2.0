import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

// Dummy data for prototyping
const initialInventory = [
  { id: 1, name: 'Amoxicillin', stock: 100, price: 15.99, category: 'Antibiotics', expiryDate: '2024-12-31' },
  { id: 2, name: 'Ibuprofen', stock: 150, price: 8.99, category: 'Pain Relief', expiryDate: '2025-06-30' },
  { id: 3, name: 'Omeprazole', stock: 75, price: 12.99, category: 'Gastrointestinal', expiryDate: '2024-09-30' },
];

const initialTransactions = [
  { id: 1, patientName: 'John Doe', medicine: 'Amoxicillin', quantity: 2, date: '2024-03-15', status: 'Completed' },
  { id: 2, patientName: 'Jane Smith', medicine: 'Ibuprofen', quantity: 1, date: '2024-03-16', status: 'Pending' },
];

const initialChats = [
  { id: 1, patientName: 'John Doe', lastMessage: 'Do you have Amoxicillin in stock?', timestamp: '10:30 AM', unread: true },
  { id: 2, patientName: 'Jane Smith', lastMessage: 'When will my prescription be ready?', timestamp: 'Yesterday', unread: false },
];

// New dummy data
const initialAnalytics = {
  totalSales: 1250.50,
  prescriptionsFilled: 45,
  lowStockItems: 3,
  upcomingExpiries: 2,
};

const initialSchedule = [
  { id: 1, time: '09:00 AM', patient: 'John Doe', type: 'Prescription Pickup' },
  { id: 2, time: '11:30 AM', patient: 'Jane Smith', type: 'Consultation' },
  { id: 3, time: '02:00 PM', patient: 'Mike Johnson', type: 'Prescription Pickup' },
];

const initialNotifications = [
  { id: 1, message: 'Low stock alert: Amoxicillin', type: 'warning', time: '5m ago' },
  { id: 2, message: 'New prescription request from John Doe', type: 'info', time: '15m ago' },
  { id: 3, message: 'Omeprazole expiring in 30 days', type: 'warning', time: '1h ago' },
];

const initialPharmacistData = {
  name: 'Dr. Sarah Wilson',
  email: 'sarah.wilson@pharmacy.com',
  phone: '+1234567890',
  license: 'PH123456',
  specialization: 'Clinical Pharmacy',
};

export const PharmacistDashboard = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [inventory, setInventory] = useState(initialInventory);
  const [transactions, setTransactions] = useState(initialTransactions);
  const [chats, setChats] = useState(initialChats);
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications] = useState(initialNotifications);

  const handleAddMedicine = () => {
    Alert.alert(
      'Add Medicine',
      'This would open a form to add new medicine to inventory',
      [{ text: 'OK' }]
    );
  };

  const handleUpdateStock = (medicineId: number) => {
    Alert.alert(
      'Update Stock',
      'This would open a form to update medicine stock',
      [{ text: 'OK' }]
    );
  };

  const handleViewChat = (chatId: number) => {
    navigation.navigate('Chat', { chatId });
  };

  const handleProcessTransaction = (transactionId: number) => {
    Alert.alert(
      'Process Transaction',
      'This would process the selected transaction',
      [{ text: 'OK' }]
    );
  };

  const handleAnalytics = () => {
    Alert.alert(
      'Analytics',
      `Total Sales: $${initialAnalytics.totalSales}\nPrescriptions Filled: ${initialAnalytics.prescriptionsFilled}\nLow Stock Items: ${initialAnalytics.lowStockItems}\nUpcoming Expiries: ${initialAnalytics.upcomingExpiries}`,
      [{ text: 'OK' }]
    );
  };

  const handleSchedule = () => {
    Alert.alert(
      'Today\'s Schedule',
      initialSchedule.map(item => `${item.time} - ${item.patient} (${item.type})`).join('\n'),
      [{ text: 'OK' }]
    );
  };

  const handleSettings = () => {
    navigation.navigate('Settings', { userData: initialPharmacistData, userType: 'pharmacist' });
  };

  const handleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const filteredInventory = inventory.filter(medicine =>
    medicine.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Pharmacist Dashboard</Text>
          <View style={styles.headerButtons}>
            <TouchableOpacity style={styles.notificationButton} onPress={handleNotifications}>
              <Ionicons name="notifications-outline" size={24} color="white" />
              {notifications.length > 0 && <View style={styles.notificationBadge} />}
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingsButton} onPress={handleSettings}>
              <Ionicons name="settings-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {showNotifications && (
          <View style={styles.notificationsContainer}>
            {notifications.map(notification => (
              <TouchableOpacity key={notification.id} style={styles.notificationItem}>
                <Ionicons 
                  name={notification.type === 'warning' ? 'warning' : 'information-circle'} 
                  size={20} 
                  color={notification.type === 'warning' ? '#FF3B30' : '#007AFF'} 
                />
                <View style={styles.notificationContent}>
                  <Text style={styles.notificationMessage}>{notification.message}</Text>
                  <Text style={styles.notificationTime}>{notification.time}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search medicines..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#666"
          />
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.quickActionButton} onPress={handleAddMedicine}>
            <View style={styles.quickActionIcon}>
              <Ionicons name="add-circle-outline" size={24} color="#4CAF50" />
            </View>
            <Text style={styles.quickActionText}>Add Medicine</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickActionButton} onPress={handleAnalytics}>
            <View style={styles.quickActionIcon}>
              <Ionicons name="analytics-outline" size={24} color="#007AFF" />
            </View>
            <Text style={styles.quickActionText}>Analytics</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickActionButton} onPress={handleSchedule}>
            <View style={styles.quickActionIcon}>
              <Ionicons name="calendar-outline" size={24} color="#FF9500" />
            </View>
            <Text style={styles.quickActionText}>Schedule</Text>
          </TouchableOpacity>
        </View>

        {/* Inventory Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Inventory Management</Text>
            <TouchableOpacity style={styles.addButton} onPress={handleAddMedicine}>
              <Ionicons name="add" size={20} color="white" style={styles.buttonIcon} />
              <Text style={styles.addButtonText}>Add Medicine</Text>
            </TouchableOpacity>
          </View>
          {filteredInventory.map((medicine) => (
            <View key={medicine.id} style={styles.card}>
              <View style={styles.medicineHeader}>
                <View style={styles.medicineInfo}>
                  <Text style={styles.medicineName}>{medicine.name}</Text>
                  <Text style={styles.medicineCategory}>{medicine.category}</Text>
                </View>
                <View style={[
                  styles.stockIndicator,
                  medicine.stock <= 20 ? styles.lowStock : styles.goodStock
                ]}>
                  <Ionicons 
                    name={medicine.stock <= 20 ? "warning" : "checkmark-circle"} 
                    size={16} 
                    color={medicine.stock <= 20 ? "#FF3B30" : "#4CAF50"} 
                  />
                  <Text style={[
                    styles.stockText,
                    medicine.stock <= 20 ? styles.lowStockText : styles.goodStockText
                  ]}>
                    {medicine.stock} units
                  </Text>
                </View>
              </View>
              <View style={styles.medicineDetails}>
                <View style={styles.detailItem}>
                  <Ionicons name="cash-outline" size={16} color="#666" />
                  <Text style={styles.detailText}>${medicine.price}</Text>
                </View>
                <View style={styles.detailItem}>
                  <Ionicons name="calendar-outline" size={16} color="#666" />
                  <Text style={styles.detailText}>{medicine.expiryDate}</Text>
                </View>
              </View>
              <TouchableOpacity 
                style={styles.updateButton}
                onPress={() => handleUpdateStock(medicine.id)}
              >
                <Ionicons name="create-outline" size={16} color="white" style={styles.buttonIcon} />
                <Text style={styles.updateButtonText}>Update Stock</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Recent Transactions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>
          {transactions.map((transaction) => (
            <View key={transaction.id} style={styles.card}>
              <View style={styles.transactionHeader}>
                <View style={styles.transactionInfo}>
                  <Text style={styles.patientName}>{transaction.patientName}</Text>
                  <Text style={styles.transactionDate}>{transaction.date}</Text>
                </View>
                <View style={[
                  styles.status,
                  transaction.status === 'Completed' ? styles.completedStatus : styles.pendingStatus
                ]}>
                  <Ionicons 
                    name={transaction.status === 'Completed' ? "checkmark-circle" : "time"} 
                    size={16} 
                    color={transaction.status === 'Completed' ? "#4CAF50" : "#FF9500"} 
                  />
                  <Text style={[
                    styles.statusText,
                    transaction.status === 'Completed' ? styles.completedStatusText : styles.pendingStatusText
                  ]}>
                    {transaction.status}
                  </Text>
                </View>
              </View>
              <View style={styles.transactionDetails}>
                <View style={styles.detailItem}>
                  <Ionicons name="medical-outline" size={16} color="#666" />
                  <Text style={styles.detailText}>{transaction.medicine}</Text>
                </View>
                <View style={styles.detailItem}>
                  <Ionicons name="cube-outline" size={16} color="#666" />
                  <Text style={styles.detailText}>Qty: {transaction.quantity}</Text>
                </View>
              </View>
              {transaction.status === 'Pending' && (
                <TouchableOpacity 
                  style={styles.processButton}
                  onPress={() => handleProcessTransaction(transaction.id)}
                >
                  <Ionicons name="checkmark-circle-outline" size={16} color="white" style={styles.buttonIcon} />
                  <Text style={styles.processButtonText}>Process Transaction</Text>
                </TouchableOpacity>
              )}
            </View>
          ))}
        </View>

        {/* Patient Chats */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Patient Messages</Text>
          {chats.map((chat) => (
            <TouchableOpacity 
              key={chat.id} 
              style={styles.chatCard}
              onPress={() => handleViewChat(chat.id)}
            >
              <View style={styles.chatHeader}>
                <View style={styles.chatInfo}>
                  <Text style={styles.patientName}>{chat.patientName}</Text>
                  <Text style={styles.lastMessage}>{chat.lastMessage}</Text>
                </View>
                <View style={styles.chatMeta}>
                  <Text style={styles.timestamp}>{chat.timestamp}</Text>
                  {chat.unread && <View style={styles.unreadIndicator} />}
                </View>
              </View>
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
    backgroundColor: '#007AFF',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  headerButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationButton: {
    padding: 8,
    marginRight: 8,
  },
  settingsButton: {
    padding: 8,
  },
  notificationBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF3B30',
  },
  notificationsContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  notificationContent: {
    marginLeft: 10,
    flex: 1,
  },
  notificationMessage: {
    fontSize: 14,
    color: '#333',
  },
  notificationTime: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  patientName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  searchContainer: {
    padding: 15,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  quickActionButton: {
    alignItems: 'center',
    width: '30%',
  },
  quickActionIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  quickActionText: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
  section: {
    padding: 15,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonIcon: {
    marginRight: 5,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  medicineHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  medicineInfo: {
    flex: 1,
  },
  medicineName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 4,
  },
  medicineCategory: {
    fontSize: 14,
    color: '#666',
  },
  stockIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
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
    marginLeft: 4,
  },
  lowStockText: {
    color: '#FF3B30',
  },
  goodStockText: {
    color: '#4CAF50',
  },
  medicineDetails: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  detailText: {
    marginLeft: 4,
    color: '#666',
  },
  updateButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  updateButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  transactionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  transactionInfo: {
    flex: 1,
  },
  transactionDate: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  statusText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  completedStatus: {
    backgroundColor: '#E0FFE0',
  },
  pendingStatus: {
    backgroundColor: '#FFF3E0',
  },
  completedStatusText: {
    color: '#4CAF50',
  },
  pendingStatusText: {
    color: '#FF9500',
  },
  transactionDetails: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  processButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  processButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  chatCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chatInfo: {
    flex: 1,
  },
  chatMeta: {
    alignItems: 'flex-end',
  },
  timestamp: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  lastMessage: {
    color: '#666',
    fontSize: 14,
  },
  unreadIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#007AFF',
  },
}); 