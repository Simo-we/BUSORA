import { useMemo, useRef, useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import Animated, { Extrapolate, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

import PopularRoutesCard from '../../home/components/PopularRoutesCard';
import DepartureTimeCard from './DepartureTimeCard';
import FindBusesButton from './FindBusesButton';
import RouteDetailsCard from './RouteDetailsCard';

const AnimatedBottomSheetScrollView = Animated.createAnimatedComponent(BottomSheetScrollView);

function FadeEdge({ direction = 'top', color = '#F5F5F7', height = 28 }) {
  const opacities = [0.95, 0.75, 0.55, 0.35, 0.18, 0.07];
  const stepHeight = height / opacities.length;

  return (
    <View style={[styles.fadeEdgeContainer, direction === 'top' ? { top: 0 } : { bottom: 0 }, { height }]} pointerEvents="none">
      {opacities.map((opacity, i) => {
        const positionStyle = direction === 'top' ? { top: i * stepHeight } : { bottom: i * stepHeight };
        return <View key={i} style={[styles.fadeEdgeSlice, positionStyle, { height: stepHeight, backgroundColor: color, opacity }]} />;
      })}
    </View>
  );
}

export default function TripPlannerBottomSheet({ isOpen, onClose }) {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['70%'], []);
  const insets = useSafeAreaInsets();

  const [destination, setDestination] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [quickOption, setQuickOption] = useState('Today');
  const [loading, setLoading] = useState(false);

  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => { scrollY.value = event.contentOffset.y; },
  });

  const stretchyContent = useAnimatedStyle(() => {
    const pull = Math.min(scrollY.value, 0);
    return {
      transform: [
        { scaleY: interpolate(pull, [-180, 0], [1.08, 1], Extrapolate.CLAMP) },
        { translateY: interpolate(pull, [-180, 0], [-24, 0], Extrapolate.CLAMP) },
      ],
    };
  });

  const footerStyle = useAnimatedStyle(() => {
    const pull = Math.min(scrollY.value, 0);
    return {
      transform: [{ translateY: interpolate(pull, [-180, 0], [10, 0], Extrapolate.CLAMP) }],
    };
  });

  const handleFindBuses = async () => {
    if (!destination) return;
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log({ destination, selectedDate, selectedTime, quickOption });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      enablePanDownToClose
      enableDynamicSizing={false}
      onClose={onClose}
      backgroundStyle={styles.sheetBackground}
      handleIndicatorStyle={styles.handle}
      keyboardBehavior="fillParent"
      keyboardBlurBehavior="restore"
      android_keyboardInputMode="adjustResize"
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Plan Your Trip</Text>
        </View>

        <View style={styles.scrollWrapper}>
          <FadeEdge direction="top" color="#F5F5F7" height={24} />

          <AnimatedBottomSheetScrollView
            bounces alwaysBounceVertical overScrollMode="always"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
            style={styles.scrollView}
            onScroll={scrollHandler}
            scrollEventThrottle={16}
          >
            <Animated.View style={stretchyContent}>
              <RouteDetailsCard destination={destination} setDestination={setDestination} />
              <DepartureTimeCard
                selectedDate={selectedDate} setSelectedDate={setSelectedDate}
                selectedTime={selectedTime} setSelectedTime={setSelectedTime}
                quickOption={quickOption} setQuickOption={setQuickOption}
              />
              <PopularRoutesCard onSelectRoute={(city) => setDestination(city)} />
              <View style={styles.scrollEndSpacer} />
            </Animated.View>
          </AnimatedBottomSheetScrollView>

          <FadeEdge direction="bottom" color="#F5F5F7" height={36} />
        </View>

        <Animated.View style={[styles.footer, footerStyle, { paddingBottom: Math.max(insets.bottom, 16) }]}>
          <FindBusesButton destination={destination} loading={loading} onPress={handleFindBuses} />
        </Animated.View>
      </View>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'column', overflow: 'hidden' },
  sheetBackground: { backgroundColor: '#F5F5F7', borderTopLeftRadius: 30, borderTopRightRadius: 30 },
  handle: { backgroundColor: '#CDD1D8', width: 44, height: 4, borderRadius: 8 },
  header: { paddingHorizontal: 18, paddingTop: 6, paddingBottom: 10, backgroundColor: '#F5F5F7' },
  title: { fontSize: 20, fontWeight: '800', color: '#1A2530', letterSpacing: -0.3 },
  scrollWrapper: { flex: 1, position: 'relative', overflow: 'hidden' },
  scrollView: { flex: 1 },
  scrollContent: { paddingHorizontal: 16, paddingTop: 6, minHeight: '101%', paddingBottom: 12 },
  scrollEndSpacer: { height: 28 },
  fadeEdgeContainer: { position: 'absolute', left: 0, right: 0, zIndex: 10, overflow: 'hidden' },
  fadeEdgeSlice: { position: 'absolute', left: 0, right: 0 },
  footer: { paddingHorizontal: 18, paddingTop: 10, backgroundColor: '#F5F5F7', borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: '#E0E3E8', ...Platform.select({ ios: { shadowColor: '#000', shadowOffset: { width: 0, height: -3 }, shadowOpacity: 0.04, shadowRadius: 6 }, android: { elevation: 6 } }) },
});