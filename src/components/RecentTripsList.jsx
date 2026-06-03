import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const ROUTES = [
  {
    id: '1',
    city: 'Lusaka',
    region: 'Capital',
    trips: 3,
    icon: (
      <MaterialCommunityIcons
        name="city-variant-outline"
        size={22}
        color="#36454F"
      />
    ),
  },
  {
    id: '2',
    city: 'Ndola',
    region: 'Copperbelt',
    trips: 2,
    icon: <Feather name="sun" size={22} color="#36454F" />,
  },
  {
    id: '3',
    city: 'Kitwe',
    region: 'Copperbelt',
    
    trips: 1,
    icon: <Ionicons name="person-outline" size={22} color="#36454F" />,
  },
];

function RouteItem({ item, showDivider }) {
  return (
    <>
      <TouchableOpacity style={styles.item} activeOpacity={0.75}>
        <View style={styles.iconWrap}>{item.icon}</View>

        <View style={styles.info}>
          <Text style={styles.city}>{item.city}</Text>
          <Text style={styles.meta}>
            {item.region} · {item.time}
          </Text>
        </View>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>
            {item.trips} {item.trips === 1 ? 'trip' : 'trips'}
          </Text>
        </View>
      </TouchableOpacity>

      {showDivider && <View style={styles.divider} />}
    </>
  );
}

export default function RecentTripsList() {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.title}>Recent</Text>

        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.viewAll}>View all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        {ROUTES.map((route, index) => (
          <RouteItem
            key={route.id}
            item={route}
            showDivider={index < ROUTES.length - 1}
          />
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginBottom: 18,
  },

  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1A2530',
    letterSpacing: -0.5,
  },

  viewAll: {
    fontSize: 15,
    color: '#7B8794',
    fontWeight: '600',
  },

  card: {
    backgroundColor: '#FFFFFF',

    borderRadius: 28,

    paddingVertical: 8,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.04,
    shadowRadius: 16,
    elevation: 4,
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 20,
    paddingVertical: 18,

    gap: 14,
  },

  iconWrap: {
    width: 56,
    height: 56,

    borderRadius: 18,

    backgroundColor: '#F5F6F8',

    alignItems: 'center',
    justifyContent: 'center',
  },

  info: {
    flex: 1,
  },

  city: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A2530',
    marginBottom: 4,
  },

  meta: {
    fontSize: 14,
    color: '#7B8794',
  },

  badge: {
    backgroundColor: '#F5F6F8',

    borderRadius: 12,

    paddingHorizontal: 14,
    paddingVertical: 8,
  },

  badgeText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#36454F',
  },

  divider: {
    height: 1,
    backgroundColor: '#EEF1F4',
    marginLeft: 90,
  },
});