import { useCallback, useState } from 'react';
import { Dimensions, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import Animated, { Extrapolate, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

import BottomNavBar from '../../shared/navigation/BottomNavBar';
import Header from './components/Header';
import DestinationCard from '../booking/components/DestinationCard';
import TripPlannerBottomSheet from '../booking/components/TripPlannerBottomSheet';
import RecentTripsList from './components/RecentTripsList';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export default function HomeScreen() {
  const [sheetOpen, setSheetOpen] = useState(false);
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

  const navStyle = useAnimatedStyle(() => {
    const pull = Math.min(scrollY.value, 0);
    return {
      transform: [{ translateY: interpolate(pull, [-220, 0], [18, 0], Extrapolate.CLAMP) }],
    };
  });

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar backgroundColor="#F5F5F7" barStyle="dark-content" />
      <View style={styles.mainContainer}>
        <Animated.ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={scrollHandler}
          bounces
          alwaysBounceVertical
          overScrollMode="always"
        >
          <Animated.View style={stretchyCanvas}>
            <View style={styles.headerWrapper}>
              <Header />
            </View>
            <View style={styles.innerLayout}>
              <DestinationCard onPress={() => setSheetOpen(true)} />
              <RecentTripsList />
            </View>
          </Animated.View>
        </Animated.ScrollView>

        <Animated.View style={[styles.navWrapper, navStyle]}>
          <BottomNavBar activeTab={0} />
        </Animated.View>
      </View>

      <TripPlannerBottomSheet isOpen={sheetOpen} onClose={() => setSheetOpen(false)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F5F5F7' },
  mainContainer: { flex: 1, overflow: 'hidden' },
  scroll: { flex: 1 },
  content: { minHeight: SCREEN_HEIGHT + 2, paddingBottom: 160 },
  headerWrapper: { paddingHorizontal: 20 },
  innerLayout: { paddingHorizontal: 20, paddingTop: 4, gap: 12 },
  navWrapper: { position: 'absolute', left: 0, right: 0, bottom: 0 },
});