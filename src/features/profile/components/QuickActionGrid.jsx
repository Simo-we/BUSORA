import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BriefcaseBusiness, Ticket, CreditCard, Shield } from 'lucide-react-native';
import QuickActionCard from './QuickActionCard';

const quickActions = [
  { id: 1, title: 'My Trips', subtitle: 'Upcoming', icon: BriefcaseBusiness },
  { id: 2, title: 'Tickets', subtitle: 'Bookings', icon: Ticket },
  { id: 3, title: 'Payments', subtitle: 'Cards', icon: CreditCard },
  { id: 4, title: 'Safety', subtitle: 'Security', icon: Shield },
];

export default function QuickActionGrid() {
  return (
    <View style={styles.container}>
      {quickActions.map((item) => (
        <QuickActionCard
          key={item.id}
          icon={item.icon}
          title={item.title}
          subtitle={item.subtitle}
          onPress={() => {}}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 35, marginBottom: 6 },
});