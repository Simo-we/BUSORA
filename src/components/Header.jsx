import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Header() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top + 12,
        },
      ]}
    >
      <View style={styles.left}>
        <View style={styles.logo}>
          <View style={styles.grid}>
            <View style={styles.cell} />
            <View style={styles.cell} />
            <View style={styles.cell} />
            <View style={[styles.cell, styles.orange]} />
          </View>
        </View>

        <View>
          <Text style={styles.brand}>Busora</Text>
          <View style={styles.locationRow}>
            <Ionicons name="location-outline" size={12} color="#7A8794" />
            <Text style={styles.location}>Current: Lusaka</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.menu} activeOpacity={0.7}>
        <Feather name="menu" size={22} color="#1A2530" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 24,
    paddingBottom: 18,
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },

  logo: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: '#F7F8FA',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 4,
  },

  grid: {
    width: 24,
    height: 24,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 2,
  },

  cell: {
    width: 10,
    height: 10,
    borderRadius: 3,
  },

  orange: {
    backgroundColor: '#DA7213',
  },

  brand: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1A2530',
    letterSpacing: -0.8,
  },

  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 4,
  },

  location: {
    fontSize: 13,
    color: '#7B8794',
    fontWeight: '500',
  },

  menu: {
    width: 50,
    height: 50,
    borderRadius: 16,
    backgroundColor: '#F7F8FA',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 3,
  },
});