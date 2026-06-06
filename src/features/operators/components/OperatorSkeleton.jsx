import React, { useRef, useEffect } from 'react';
import { Animated, View, StyleSheet, ScrollView } from 'react-native';

function SkeletonBlock({ style }) {
  const opacity = useRef(new Animated.Value(0.4)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, { toValue: 1, duration: 700, useNativeDriver: true }),
        Animated.timing(opacity, { toValue: 0.4, duration: 700, useNativeDriver: true }),
      ])
    ).start();
  }, []);

  return <Animated.View style={[styles.skeleton, style, { opacity }]} />;
}

function CardSkeleton() {
  return (
    <View style={styles.card}>
      <SkeletonBlock style={styles.image} />
      <SkeletonBlock style={styles.title} />
      <SkeletonBlock style={styles.subtitle} />
      <View style={styles.footer}>
        <SkeletonBlock style={styles.badge} />
        <SkeletonBlock style={styles.price} />
      </View>
    </View>
  );
}

export default function OperatorSkeleton() {
  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      {[...Array(6)].map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', paddingHorizontal: 12, paddingBottom: 120 },
  card: { width: '49%', backgroundColor: '#FFF', borderRadius: 22, padding: 10, marginBottom: 14 },
  skeleton: { backgroundColor: '#E5E7EB' },
  image: { height: 120, borderRadius: 16 },
  title: { height: 16, width: '80%', marginTop: 12, borderRadius: 6 },
  subtitle: { height: 12, width: '60%', marginTop: 8, borderRadius: 6 },
  footer: { marginTop: 14, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  badge: { height: 26, width: 70, borderRadius: 999 },
  price: { height: 20, width: 60, borderRadius: 6 },
});