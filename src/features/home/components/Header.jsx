import React from 'react';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Header() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.headerWrapper, { paddingTop: insets.top + 12 }]}>
      <View style={styles.topRow}>
        <View style={styles.identityRow}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../../../assets/images/Logo.png')}
              style={styles.logoImage}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.brand}>SIMO</Text>
        </View>

        <TouchableOpacity style={styles.menu} activeOpacity={0.4} onPress={() => router.push('/profile')}>
          <Image
            source={require('../../../assets/icons/menuline.png')}
            style={styles.menu}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.locationRow}>
        <Ionicons name="location-outline" size={12} color="#7A8794" />
        <Text style={styles.location}>Current: Lusaka</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerWrapper: { width: '100%', paddingBottom: 16 },
  topRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' },
  identityRow: { flexDirection: 'row', alignItems: 'center', gap: 0 },
  logoContainer: { width: 66, height: 66, alignItems: 'center', justifyContent: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.06, shadowRadius: 8, elevation: 3 },
  logoImage: { width: '100%', height: '100%', borderRadius: 16 },
  brand: { fontSize: 22, fontWeight: '900', color: '#1A2530', letterSpacing: -0.8, lineHeight: 26, marginLeft: -4 },
  menu: { width: 30, height: 30, alignItems: 'center', justifyContent: 'center' },
  locationRow: { flexDirection: 'row', alignItems: 'center', gap: 3, paddingLeft: 2, marginVertical: -2 },
  location: { fontSize: 12, color: '#7B8794', fontWeight: '500' },
});