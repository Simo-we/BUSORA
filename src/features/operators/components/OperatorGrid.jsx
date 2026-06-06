import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import BusOperatorCard from './BusOperatorCard';

export default function OperatorGrid({ operators = [], onOperatorPress, onFavoritePress }) {
  return (
    <FlatList
      data={operators}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.content}
      columnWrapperStyle={styles.row}
      renderItem={({ item }) => (
        <BusOperatorCard
          operator={item}
          onPress={onOperatorPress}
          onFavoritePress={onFavoritePress}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  content: { paddingBottom: 120 },
  row: { paddingHorizontal: 10 },
});