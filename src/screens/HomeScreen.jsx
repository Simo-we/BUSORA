import React, { useState, useCallback } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  RefreshControl,
  Dimensions,
} from 'react-native';

import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  Extrapolate,
} from 'react-native-reanimated';

import Header from '../components/Header';
import DestinationCard from '../components/DestinationCard';
import RecentTripsList from '../components/RecentTripsList';
import BottomNavBar from '../components/BottomNavBar';
import TripPlannerBottomSheet from '../components/TripPlannerBottomSheet';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export default function HomeScreen() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const scrollY = useSharedValue(0);

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 1800);
  }, []);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  /**
   * MAIN RUBBER SHEET EFFECT
   */

  const stretchyCanvas = useAnimatedStyle(() => {
    const y = scrollY.value;

    /**
     * Negative values = pulling downward
     */

    const pull = Math.min(y, 0);

    /**
     * Vertical stretch ONLY
     * This is the secret.
     */

    const scaleY = interpolate(
      pull,
      [-220, 0],
      [1.12, 1],
      Extrapolate.CLAMP
    );

    /**
     * Gentle drag lag
     */

    const translateY = interpolate(
      pull,
      [-220, 0],
      [-35, 0],
      Extrapolate.CLAMP
    );

    return {
      transform: [
        { translateY },
        { scaleY },
      ],
    };
  });

  /**
   * Floating nav reacts separately
   */

  const navStyle = useAnimatedStyle(() => {
    const pull = Math.min(scrollY.value, 0);

    const translateY = interpolate(
      pull,
      [-220, 0],
      [18, 0],
      Extrapolate.CLAMP
    );

    return {
      transform: [{ translateY }],
    };
  });

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar
        backgroundColor="#F5F5F7"
        barStyle="dark-content"
      />

      <View style={styles.mainContainer}>
        <Animated.ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={scrollHandler}

          /**
           * IMPORTANT
           */

          bounces
          alwaysBounceVertical
          overScrollMode="always"

        >
          <Animated.View style={stretchyCanvas}>
            <View style={styles.headerWrapper}>
              <Header />
            </View>

            <View style={styles.innerLayout}>
              <DestinationCard
                onPress={() => setSheetOpen(true)}
              />

              <RecentTripsList />
            </View>
          </Animated.View>
        </Animated.ScrollView>

        <Animated.View style={[styles.navWrapper, navStyle]}>
          <BottomNavBar activeTab={0} />
        </Animated.View>
      </View>

      <TripPlannerBottomSheet
        isOpen={sheetOpen}
        onClose={() => setSheetOpen(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F5F5F7',
  },

  mainContainer: {
    flex: 1,
    overflow: 'hidden',
  },

  scroll: {
    flex: 1,
  },

content: {
  minHeight: SCREEN_HEIGHT + 2,
  paddingBottom: 160,
},

  headerWrapper: {
    paddingHorizontal: 20,
  },

  innerLayout: {
    paddingHorizontal: 20,
    paddingTop: 4,
    gap: 12,
  },

  navWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});