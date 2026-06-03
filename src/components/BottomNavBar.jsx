import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  Ionicons,
  Feather,
} from '@expo/vector-icons';

const TABS = [
  {
    label: 'Home',
    icon: (active) => (
      <Ionicons
        name={active ? 'home' : 'home-outline'}
        size={20}
        color={active ? '#111827' : '#9CA3AF'}
      />
    ),
  },

  {
    label: 'Trips',
    icon: (active) => (
      <Feather
        name="shopping-bag"
        size={19}
        color={active ? '#111827' : '#9CA3AF'}
      />
    ),
  },

  {
    label: 'Tickets',
    icon: (active) => (
      <Ionicons
        name={active ? 'ticket' : 'ticket-outline'}
        size={20}
        color={active ? '#111827' : '#9CA3AF'}
      />
    ),
  },

  {
    label: 'Account',
    icon: (active) => (
      <Ionicons
        name={active ? 'person' : 'person-outline'}
        size={20}
        color={active ? '#111827' : '#9CA3AF'}
      />
    ),
  },
];

export default function BottomNavBar({
  activeTab = 0,
}) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,

        {
          bottom: insets.bottom + 10,
        },
      ]}
    >
      {TABS.map((tab, i) => {
        const active = i === activeTab;

        return (
          <TouchableOpacity
            key={tab.label}
            style={[
              styles.tab,

              active && styles.activeTab,
            ]}
            activeOpacity={0.82}
          >
            <View style={styles.iconWrap}>
              {tab.icon(active)}
            </View>

            <Text
              style={[
                styles.label,

                active && styles.labelActive,
              ]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  /**
   * FLOATING CONTAINER
   */

  container: {
    position: 'absolute',

    left: 34,
    right: 34,

    height: 64,

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    borderRadius: 32,

    paddingHorizontal: 6,
    paddingVertical: 6,

    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 10,
    },

    shadowOpacity: 0.06,

    shadowRadius: 20,

    elevation: 8,
  },

  /**
   * TAB
   */

tab: {
  flex: 1,

  height: 44,

  marginHorizontal: 4,

  borderRadius: 14,

  alignItems: 'center',
  justifyContent: 'center',
},

  /**
   * ACTIVE TAB
   */

activeTab: {
  backgroundColor: '#eff0f2',

  borderRadius: 20,

  shadowColor: '#000',

  shadowOffset: {
    width: 0,
    height: 6,
  },

  shadowOpacity: 0.08,

  shadowRadius: 40,

},

  /**
   * ICON
   */

  iconWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  /**
   * LABEL
   */

  label: {
    marginTop: 2,

    fontSize: 10,

    fontWeight: '600',

    color: '#9CA3AF',

    letterSpacing: 0.15,
  },

  labelActive: {
    color: '#111827',

    fontWeight: '700',
  },
});