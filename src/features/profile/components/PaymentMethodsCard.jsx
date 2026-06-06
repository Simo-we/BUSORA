import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import {
    ChevronRight,
    CirclePlus
} from 'lucide-react-native';

import NeumorphicCard from '../../../shared/components/NeumorphicCard';

const methods = [
  {
    id: 1,
    type: 'image',
    icon: require('../../../assets/icons/MTN.png'),
    label: 'MTN Mobile Money',
  },
  {
    id: 2,
    type: 'image',
    icon: require('../../../assets/icons/Airtel.png'),
    label: 'Airtel Mobile Money',
  },
];

export default function PaymentMethodsCard() {
  return (
    <NeumorphicCard style={styles.card}>
      <Text style={styles.title}>Payment Methods</Text>

      {methods.map((item) => (
        <TouchableOpacity
          key={item.id}
          activeOpacity={0.7}
          style={styles.row}
          onPress={() => console.log(`${item.label} pressed`)}
        >
          <View style={styles.left}>
            {item.type === 'lucide' ? (
              <item.icon size={18} color="#1A1A1A" />
            ) : (
              <Image
                source={item.icon}
                style={styles.paymentIcon}
                resizeMode="contain"
              />
            )}
            <Text style={styles.label}>{item.label}</Text>
          </View>
          <ChevronRight size={18} color="#7A7A7A" />
        </TouchableOpacity>
      ))}

      <TouchableOpacity activeOpacity={0.8} style={styles.addButton}>
        <CirclePlus size={18} color="#1A1A1A" />
        <Text style={styles.addText}>Add Payment Method</Text>
      </TouchableOpacity>
    </NeumorphicCard>
  );
}

const styles = StyleSheet.create({
  card: { padding: 20, marginTop: 20, marginBottom: 20 },
  title: { fontSize: 18, fontWeight: '700', color: '#1A1A1A', marginBottom: 16 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12 },
  left: { flexDirection: 'row', alignItems: 'center' },
  paymentIcon: { width: 20, height: 20 },
  label: { marginLeft: 10, fontSize: 15, color: '#1A1A1A' },
  addButton: { marginTop: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 14, backgroundColor: '#F8F8F8', borderRadius: 16 },
  addText: { marginLeft: 8, fontSize: 14, fontWeight: '600', color: '#1A1A1A' },
});