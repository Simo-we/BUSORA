import React, { forwardRef, useMemo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

const filters = ['All', 'Luxury', 'AC Sleeper', 'VIP', 'Express'];

const OperatorFilterSheet = forwardRef(({ selectedFilter, onSelectFilter }, ref) => {
  const snapPoints = useMemo(() => ['40%'], []);

  return (
    <BottomSheet ref={ref} index={-1} snapPoints={snapPoints} enablePanDownToClose>
      <View style={styles.container}>
        <Text style={styles.title}>Filter Operators</Text>
        {filters.map((filter) => (
          <TouchableOpacity
            key={filter}
            style={[styles.filterChip, selectedFilter === filter && styles.activeChip]}
            onPress={() => onSelectFilter(filter)}
          >
            <Text style={[styles.filterText, selectedFilter === filter && styles.activeText]}>
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </BottomSheet>
  );
});

export default OperatorFilterSheet;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 20 },
  filterChip: { backgroundColor: '#F3F4F6', paddingVertical: 14, paddingHorizontal: 16, borderRadius: 14, marginBottom: 10 },
  activeChip: { backgroundColor: '#4F46E5' },
  filterText: { fontSize: 15, fontWeight: '600', color: '#111827' },
  activeText: { color: '#FFFFFF' },
});