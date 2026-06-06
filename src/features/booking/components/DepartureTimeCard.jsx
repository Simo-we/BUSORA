import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';

export default function DepartureTimeCard({ selectedDate, setSelectedDate, selectedTime, setSelectedTime, quickOption, setQuickOption }) {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const formatDate = (date) => date.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' });
  const formatTime = (date) => date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Departure Time</Text>

      <View style={styles.chipsRow}>
        {['Now', 'Today', 'Tomorrow'].map((item) => (
          <TouchableOpacity key={item} activeOpacity={0.8} onPress={() => setQuickOption(item)} style={[styles.chip, quickOption === item && styles.activeChip]}>
            <Text style={[styles.chipText, quickOption === item && styles.activeChipText]}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.dateTimeRow}>
        <TouchableOpacity activeOpacity={0.8} style={styles.selector} onPress={() => setShowDatePicker(true)}>
          <View style={styles.selectorContent}>
            <Text style={styles.label}>DATE</Text>
            <Text style={styles.value}>{formatDate(selectedDate)}</Text>
          </View>
          <Ionicons name="calendar-outline" size={14} color="#1A2530" />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.8} style={styles.selector} onPress={() => setShowTimePicker(true)}>
          <View style={styles.selectorContent}>
            <Text style={styles.label}>TIME</Text>
            <Text style={styles.value}>{formatTime(selectedTime)}</Text>
          </View>
          <Ionicons name="time-outline" size={14} color="#1A2530" />
        </TouchableOpacity>
      </View>

      <Text style={styles.helperText}>We'll tailor buses around your preferred time</Text>

      {showDatePicker && (
        <DateTimePicker value={selectedDate} mode="date" display="default" onChange={(event, date) => { setShowDatePicker(false); if (date) setSelectedDate(date); }} />
      )}
      {showTimePicker && (
        <DateTimePicker value={selectedTime} mode="time" display="default" onChange={(event, date) => { setShowTimePicker(false); if (date) setSelectedTime(date); }} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 12, marginBottom: 8, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.03, shadowRadius: 8, elevation: 2 },
  cardTitle: { fontSize: 12, fontWeight: '700', color: '#1A2530', marginBottom: 8, letterSpacing: 0.1 },
  chipsRow: { flexDirection: 'row', marginBottom: 8 },
  chip: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 10, marginRight: 6, backgroundColor: '#F5F5F7' },
  activeChip: { backgroundColor: '#1A2530' },
  chipText: { fontSize: 10, fontWeight: '600', color: '#7B8794' },
  activeChipText: { color: '#FFFFFF' },
  dateTimeRow: { flexDirection: 'row', gap: 6 },
  selector: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#F8F9FB', borderRadius: 10, paddingHorizontal: 10, paddingVertical: 7 },
  selectorContent: { flex: 1 },
  label: { fontSize: 8, fontWeight: '600', color: '#8B96A5', marginBottom: 1, letterSpacing: 0.4 },
  value: { fontSize: 12, fontWeight: '600', color: '#1A2530' },
  helperText: { fontSize: 9, lineHeight: 13, color: '#7B8794', marginTop: 6 },
});