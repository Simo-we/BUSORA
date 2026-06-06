import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';
import { ChevronLeft } from 'lucide-react-native';

export default function ProfileHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.contentRow}>

        <View style={styles.leftContent}>
          <Text style={styles.name}>Simon Mwale</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => router.replace('/')}
            style={styles.backButton}
          >
            <ChevronLeft size={22} color="#1A1A1A" strokeWidth={3.5} />
          </TouchableOpacity>
        </View>

        <View style={styles.avatarContainer}>
          <Image
            source={require('../../../assets/images/Avatar.jpg')}
            style={styles.avatarImage}
            resizeMode="cover"
          />
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#F5F5F7', paddingHorizontal: 24, paddingTop: 58, paddingBottom: 18 },
  backButton: { marginTop: 4, alignSelf: 'flex-start', paddingVertical: 4, paddingRight: 8 },
  contentRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  leftContent: { flex: 1 },
  name: { fontSize: 34, fontWeight: '800', color: '#1A1A1A', letterSpacing: -0.8, lineHeight: 34 },
  avatarContainer: { width: 72, height: 72, borderRadius: 36, backgroundColor: '#E6E6E6', overflow: 'hidden', shadowColor: '#B0B0B0', shadowOffset: { width: 4, height: 4 }, shadowOpacity: 0.25, shadowRadius: 8, elevation: 4 },
  avatarImage: { width: '100%', height: '100%' },
});