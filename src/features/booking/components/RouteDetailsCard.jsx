import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CITIES = ['Eastern', 'Northern', 'Southern', 'Western', 'North-Western', 'Central', 'Copperbelt', 'Luapula', 'Muchinga', 'Lusaka'];

export default function RouteDetailsCard({ destination, setDestination }) {
  const [showCityPicker, setShowCityPicker] = useState(false);

  return (
    <>
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Route Details</Text>
        <View style={styles.routeContainer}>
          <View style={styles.indicator}>
            <View style={styles.startDot} />
            <View style={styles.line} />
            <View style={styles.endDot} />
          </View>
          <View style={styles.fields}>
            <View style={styles.field}>
              <Text style={styles.label}>FROM</Text>
              <Text style={styles.value}>Lusaka</Text>
            </View>
            <View style={styles.separator} />
            <TouchableOpacity activeOpacity={0.8} style={styles.field} onPress={() => setShowCityPicker(true)}>
              <Text style={styles.label}>TO</Text>
              <Text style={[styles.value, !destination && styles.placeholder]}>{destination || 'Where to?'}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.swapButton} activeOpacity={0.8}>
            <Ionicons name="swap-vertical" size={15} color="#1A2530" />
          </TouchableOpacity>
        </View>
      </View>

      <Modal visible={showCityPicker} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Destination</Text>
            <FlatList
              data={CITIES}
              keyExtractor={(item) => item}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.cityItem} onPress={() => { setDestination(item); setShowCityPicker(false); }}>
                  <Text style={styles.cityText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity style={styles.closeButton} onPress={() => setShowCityPicker(false)}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 12, marginBottom: 8, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.04, shadowRadius: 10, elevation: 3 },
  sectionTitle: { fontSize: 12, fontWeight: '700', color: '#1A2530', marginBottom: 10, letterSpacing: 0.1 },
  routeContainer: { flexDirection: 'row', alignItems: 'center' },
  indicator: { alignItems: 'center', marginRight: 10 },
  startDot: { width: 7, height: 7, borderRadius: 3.5, backgroundColor: '#1A2530' },
  line: { width: 1.5, height: 22, backgroundColor: '#D5D9DE', marginVertical: 3 },
  endDot: { width: 7, height: 7, borderRadius: 3.5, borderWidth: 1.5, borderColor: '#1A2530' },
  fields: { flex: 1 },
  field: { paddingVertical: 4 },
  label: { fontSize: 9, fontWeight: '600', color: '#7B8794', marginBottom: 1, letterSpacing: 0.4 },
  value: { fontSize: 14, fontWeight: '700', color: '#1A2530' },
  placeholder: { color: '#A7B0BA', fontWeight: '500' },
  separator: { height: 1, backgroundColor: '#EEF1F4', marginVertical: 4 },
  swapButton: { width: 32, height: 32, borderRadius: 10, backgroundColor: '#F7F8FA', justifyContent: 'center', alignItems: 'center', marginLeft: 10 },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.25)', justifyContent: 'flex-end' },
  modalContent: { backgroundColor: '#FFFFFF', borderTopLeftRadius: 28, borderTopRightRadius: 28, paddingHorizontal: 24, paddingTop: 24, paddingBottom: 40, maxHeight: '70%' },
  modalTitle: { fontSize: 18, fontWeight: '800', color: '#1A2530', marginBottom: 14 },
  cityItem: { paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#F0F2F4' },
  cityText: { fontSize: 14, fontWeight: '600', color: '#1A2530' },
  closeButton: { marginTop: 14, height: 46, borderRadius: 14, backgroundColor: '#1A2530', justifyContent: 'center', alignItems: 'center' },
  closeText: { color: '#FFFFFF', fontSize: 14, fontWeight: '700' },
});