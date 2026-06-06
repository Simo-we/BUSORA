import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function FindBusesButton({ destination, loading = false, onPress }) {
  const disabled = !destination || destination.trim().length === 0 || loading;

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity activeOpacity={0.85} disabled={disabled} onPress={onPress} style={[styles.button, disabled && styles.disabledButton]}>
        {loading ? (
          <View style={styles.contentRow}>
            <ActivityIndicator size="small" color="#FFFFFF" />
            <Text style={styles.buttonText}>Finding buses...</Text>
          </View>
        ) : (
          <View style={styles.contentRow}>
            <Text style={styles.buttonText}>Find Available Buses</Text>
            <Ionicons name="arrow-forward" size={15} color={disabled ? '#D0D4DA' : '#FFFFFF'} />
          </View>
        )}
      </TouchableOpacity>
      <Text style={[styles.helperText, disabled && styles.helperTextDisabled]}>
        {disabled ? 'Select a destination to continue' : 'Showing buses based on your trip plan'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { width: '100%', alignItems: 'center' },
  button: { width: '100%', height: 46, borderRadius: 23, backgroundColor: '#1A2530', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 16, shadowColor: '#1A2530', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.25, shadowRadius: 10, elevation: 5 },
  disabledButton: { backgroundColor: '#C4C9D0', shadowOpacity: 0, elevation: 0 },
  contentRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  buttonText: { color: '#FFFFFF', fontSize: 14, fontWeight: '700', letterSpacing: 0.1 },
  helperText: { marginTop: 7, fontSize: 10, fontWeight: '600', color: '#1A2530', textAlign: 'center' },
  helperTextDisabled: { color: '#9BA3AE', fontWeight: '500' },
});