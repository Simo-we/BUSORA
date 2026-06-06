import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import Animated, { Extrapolate, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

import PaymentMethodsCard from './components/PaymentMethodsCard';
import ProfileHeader from './components/ProfileHeader';
import QuickActionGrid from './components/QuickActionGrid';
import SafetyCard from './components/SafetyCard';

const HEADER_HEIGHT = 148;

export default function ProfileScreen() {
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => { scrollY.value = event.contentOffset.y; },
  });

  const stretchyCanvas = useAnimatedStyle(() => {
    const pull = Math.min(scrollY.value, 0);
    return {
      transform: [
        { scaleY: interpolate(pull, [-220, 0], [1.12, 1], Extrapolate.CLAMP) },
        { translateY: interpolate(pull, [-220, 0], [-35, 0], Extrapolate.CLAMP) },
      ],
    };
  });

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F5F7" />
      <View style={styles.container}>
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          bounces
          alwaysBounceVertical
          overScrollMode="always"
        >
          <Animated.View style={stretchyCanvas}>
            <QuickActionGrid />
            <SafetyCard />
            <PaymentMethodsCard />
          </Animated.View>
        </Animated.ScrollView>

        <View style={styles.stickyHeader}>
          <ProfileHeader />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F5F5F7' },
  container: { flex: 1 },
  content: { paddingHorizontal: 20, paddingTop: HEADER_HEIGHT, paddingBottom: 140, minHeight: '101%' },
  stickyHeader: { position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10, backgroundColor: '#F5F5F7' },
});