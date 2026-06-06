import React, { useRef, useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import OperatorGrid from './components/OperatorGrid';
import OperatorSearchBar from './components/OperatorSearchBar';
import OperatorFilterSheet from './components/OperatorFilterSheet';

import operators from './data/operatorsData';

export default function BusOperatorsScreen() {
  const sheetRef = useRef(null);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <Text style={styles.heading}>Bus Operators</Text>
      <OperatorSearchBar
        value={search}
        onChangeText={setSearch}
        onFilterPress={() => sheetRef.current?.expand()}
      />
      <OperatorGrid operators={operators} />
      <OperatorFilterSheet ref={sheetRef} selectedFilter={filter} onSelectFilter={setFilter} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  heading: { fontSize: 34, fontWeight: '800', paddingHorizontal: 16, marginTop: 8, marginBottom: 8 },
});