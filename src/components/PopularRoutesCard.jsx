import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const POPULAR_ROUTES = [
  { id: '1', destination: 'Ndola' },
  { id: '2', destination: 'Livingstone' },
  { id: '3', destination: 'Kitwe' },
  { id: '4', destination: 'Kabwe' },
];

export default function PopularRoutesCard({ onSelectRoute }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Popular Routes</Text>
        <View style={styles.badge}>
          <Ionicons name="flame-outline" size={9} color="#7B8794" />
          <Text style={styles.badgeText}>Trending</Text>
        </View>
      </View>

      {/* Horizontal Rail */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.rail}
        bounces
        alwaysBounceHorizontal
      >
        {POPULAR_ROUTES.map((route) => (
          <TouchableOpacity
            key={route.id}
            activeOpacity={0.85}
            style={styles.pill}
            onPress={() => onSelectRoute(route.destination)}
          >
            <View style={styles.iconWrap}>
              <Ionicons name="bus-outline" size={10} color="#1A2530" />
            </View>
            <View style={styles.textBlock}>
              <Text style={styles.from}>Lusaka</Text>
              <Text style={styles.to}>→ {route.destination}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.helperText}>Tap a route to auto-fill destination</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 9,
    paddingHorizontal: 12,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.02,
    shadowRadius: 6,
    elevation: 2,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 7,
  },

  title: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1A2530',
  },

  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F6F8',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 6,
  },

  badgeText: {
    marginLeft: 2,
    fontSize: 9,
    fontWeight: '600',
    color: '#7B8794',
  },

  rail: {
    paddingRight: 4,
  },

  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F9FB',
    borderRadius: 10,
    paddingHorizontal: 7,
    paddingVertical: 5,
    marginRight: 7,
    minWidth: 105,
  },

  iconWrap: {
    width: 20,
    height: 20,
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },

  textBlock: {
    flexDirection: 'column',
  },

  from: {
    fontSize: 8,
    color: '#7B8794',
    marginBottom: 1,
  },

  to: {
    fontSize: 11,
    fontWeight: '700',
    color: '#1A2530',
  },

  helperText: {
    marginTop: 5,
    fontSize: 9,
    color: '#A4ADB8',
  },
});