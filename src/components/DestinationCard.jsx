import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DestinationCard({
  onPress,
}) {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.85}
      onPress={onPress}
    >
      <View style={styles.routeIndicator}>
        <View style={styles.dot} />
        <View style={styles.line} />
        <View style={styles.circle} />
      </View>

      <View style={styles.textBlock}>
        <Text style={styles.title}>
          Where to?
        </Text>

        <Text style={styles.sub}>
          Current location • Lusaka CBD
        </Text>
      </View>

      <View style={styles.arrowBtn}>
        <Ionicons
          name="arrow-forward"
          size={18}
          color="#FFFFFF"
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    borderRadius: 24,

    paddingHorizontal: 18,
    paddingVertical: 20,

    marginBottom: 24,

    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 8,
    },

    shadowOpacity: 0.05,

    shadowRadius: 14,

    elevation: 4,
  },

  routeIndicator: {
    width: 18,

    alignItems: 'center',

    marginRight: 14,
  },

  dot: {
    width: 8,
    height: 8,

    borderRadius: 4,

    backgroundColor: '#1A2530',
  },

  line: {
    width: 1.5,

    height: 18,

    backgroundColor: '#D7DCE2',

    marginVertical: 4,
  },

  circle: {
    width: 8,
    height: 8,

    borderRadius: 4,

    borderWidth: 1.5,

    borderColor: '#1A2530',
  },

  textBlock: {
    flex: 1,
  },

  title: {
    fontSize: 18,

    fontWeight: '700',

    color: '#1A2530',

    marginBottom: 4,
  },

  sub: {
    fontSize: 13,

    color: '#7B8794',
  },

  arrowBtn: {
    width: 44,
    height: 44,

    borderRadius: 14,

    backgroundColor: '#1A2530',

    alignItems: 'center',

    justifyContent: 'center',
  },
});