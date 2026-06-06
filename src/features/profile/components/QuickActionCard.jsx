import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import NeumorphicCard from '../../../shared/components/NeumorphicCard';

export default function QuickActionCard({ icon: Icon, title, subtitle, onPress }) {
  return (
    <TouchableOpacity activeOpacity={0.55} onPress={onPress} style={styles.wrapper}>
      <NeumorphicCard style={styles.card}>
        <View style={styles.iconContainer}>
          <Icon size={18} color="#1A1A1A" strokeWidth={2} />
        </View>
        <Text numberOfLines={1} style={styles.title}>{title}</Text>
        <Text numberOfLines={1} style={styles.subtitle}>{subtitle}</Text>
      </NeumorphicCard>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: { width: '48%', marginBottom: 12 },
  card: { height: 92, paddingHorizontal: 12, paddingVertical: 10, justifyContent: 'center' },
  iconContainer: { height: 22, justifyContent: 'center', marginBottom: 6 },
  title: { fontSize: 13, fontWeight: '700', color: '#1A1A1A', marginBottom: 2 },
  subtitle: { fontSize: 10, color: '#7A7A7A', lineHeight: 12 },
});