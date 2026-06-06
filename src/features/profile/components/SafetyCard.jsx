import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ShieldCheck, Users, Send, Bell } from 'lucide-react-native';

const SafetyCard = () => {
  const safetyOptions = [
    { id: 1, icon: Users, label: 'Emergency\ncontacts', onPress: () => {} },
    { id: 2, icon: Send, label: 'Share\ntrip', onPress: () => {} },
    { id: 3, icon: Bell, label: 'Travel\nalerts', onPress: () => {} },
    { id: 4, icon: ShieldCheck, label: 'Security\ntools', onPress: () => {} },
  ];

  return (
    <View style={styles.card}>
      <View style={styles.watermark}>
        <ShieldCheck size={52} color="#000000" strokeWidth={1.4} />
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>Safe Journey</Text>
        <Text style={styles.description}>Everything you need for{'\n'}a safer journey</Text>
      </View>
      <View style={styles.optionsContainer}>
        {safetyOptions.map((item) => {
          const Icon = item.icon;
          return (
            <TouchableOpacity key={item.id} style={styles.option} onPress={item.onPress} activeOpacity={0.7}>
              <View style={styles.iconBox}>
                <Icon size={15} color="#000000" strokeWidth={1.8} />
              </View>
              <Text style={styles.optionText}>{item.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default SafetyCard;

const styles = StyleSheet.create({
  card: { backgroundColor: '#ffffff', borderRadius: 22, padding: 16, marginTop: 12, overflow: 'hidden', shadowColor: '#d6d6d6', shadowOffset: { width: 6, height: 6 }, shadowOpacity: 0.45, shadowRadius: 10, elevation: 6, borderWidth: 1, borderColor: '#FFFFFF' },
  watermark: { position: 'absolute', top: 10, right: 14, opacity: 0.9 },
  header: { marginBottom: 14 },
  title: { fontSize: 13, fontWeight: '900', color: '#000000', marginBottom: 3, letterSpacing: 0.1 },
  description: { fontSize: 10, color: '#000000', lineHeight: 15, fontWeight: '400' },
  optionsContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  option: { flex: 1, alignItems: 'center', gap: 7 },
  iconBox: { width: 38, height: 38, borderRadius: 12, backgroundColor: '#EAF0F6', alignItems: 'center', justifyContent: 'center', shadowColor: '#FFFFFF', shadowOffset: { width: -3, height: -3 }, shadowOpacity: 1, shadowRadius: 5, elevation: 0, borderWidth: 1, borderColor: '#FFFFFF' },
  optionText: { fontSize: 9, fontWeight: '500', color: '#000000', textAlign: 'center', lineHeight: 12, letterSpacing: 0.1 },
});