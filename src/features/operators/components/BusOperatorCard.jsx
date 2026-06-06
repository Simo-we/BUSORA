import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BusOperatorCard({ operator, onPress }) {
  return (
    <TouchableOpacity activeOpacity={0.92} style={styles.card} onPress={() => onPress?.(operator)}>
      <View style={styles.topSection}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../../assets/Power-Tools-Bus.jpg')}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.ratingBadge}>
            <Ionicons name="star" size={10} color="#aa5a5a" />
            <Text style={styles.ratingText}>{operator.rating}</Text>
          </View>
        </View>
        <View style={styles.content}>
          <Text numberOfLines={1} style={styles.operatorName}>{operator.name}</Text>
          <Text numberOfLines={1} style={styles.meta}>Luxurious Bus</Text>
          <View style={styles.amenityRow}>
            <Ionicons name="wifi-outline" size={12} color="#6B7280" />
            <Text numberOfLines={1} style={styles.amenityText}>{operator.amenity}</Text>
          </View>
        </View>
      </View>

      <View style={styles.separatorContainer}>
        <View style={styles.indentLeft} />
        <View style={styles.dottedLine} />
        <View style={styles.indentRight} />
      </View>

      <View style={styles.footer}>
        <Text style={styles.fareLabel}>Fare</Text>
        <View style={styles.divider} />
        <Text style={styles.price}>K{operator.price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { flex: 1, backgroundColor: '#FFFFFF', borderRadius: 18, margin: 6, overflow: 'visible', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.04, shadowRadius: 6, elevation: 2 },
  topSection: { width: '100%' },
  imageContainer: { margin: 8, position: 'relative' },
  image: { width: '100%', height: 105, borderRadius: 12 },
  ratingBadge: { position: 'absolute', top: 6, right: 6, flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: 999, paddingHorizontal: 6, paddingVertical: 3 },
  ratingText: { marginLeft: 2, fontSize: 10, fontWeight: '700', color: '#111827' },
  content: { paddingHorizontal: 10, paddingBottom: 4 },
  operatorName: { fontSize: 15, fontWeight: '700', color: '#111827', marginBottom: 1 },
  meta: { fontSize: 12, color: '#6B7280', marginBottom: 3 },
  amenityRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
  amenityText: { marginLeft: 4, fontSize: 11, color: '#6B7280', flex: 1 },
  separatorContainer: { height: 14, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', position: 'relative', backgroundColor: '#FFFFFF' },
  dottedLine: { flex: 1, height: 1, borderWidth: 1, borderColor: '#E5E7EB', borderStyle: 'dashed', marginHorizontal: 6 },
  indentLeft: { width: 10, height: 14, backgroundColor: '#F3F4F6', borderTopRightRadius: 7, borderBottomRightRadius: 7, left: 0 },
  indentRight: { width: 10, height: 14, backgroundColor: '#F3F4F6', borderTopLeftRadius: 7, borderBottomLeftRadius: 7, right: 0 },
  footer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingTop: 8, paddingBottom: 12, backgroundColor: '#FFFFFF', borderBottomLeftRadius: 18, borderBottomRightRadius: 18 },
  fareLabel: { fontSize: 11, fontWeight: '600', color: '#aa5a5a' },
  divider: { width: 1, height: 14, backgroundColor: '#E5E7EB', marginHorizontal: 8 },
  price: { fontSize: 16, fontWeight: '800', color: '#111827', letterSpacing: -0.2 },
});