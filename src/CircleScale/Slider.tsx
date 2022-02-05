import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {clamp} from 'react-native-redash';

const {width} = Dimensions.get('window');
const CURSOR_SIZE = 40;
const CONTAINER_WIDTH = width - 64;
export const SLIDER_WIDTH = CONTAINER_WIDTH - CURSOR_SIZE;

const Slider = ({
  translateX,
  heightPercentage,
}: {
  translateX: Animated.SharedValue<number>;
  heightPercentage: number;
}) => {
  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {x: number}
  >({
    onStart: (_, ctx) => {
      ctx.x = translateX.value;
    },
    onActive: ({translationX}, ctx) => {
      translateX.value = clamp(translationX + ctx.x, 0, SLIDER_WIDTH);
    },
  });

  const style = useAnimatedStyle(() => ({
    transform: [{translateX: translateX.value}],
  }));

  return (
    <View style={styles.container}>
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
      </View>
      <View style={{...StyleSheet.absoluteFillObject, left: 20, top: 16}}>
        <Animated.View
          style={[
            {
              borderColor: '#6FDBE6',
              borderWidth: 4,
              borderRadius: 4,
            },
            useAnimatedStyle(() => ({
              width: (heightPercentage / 100) * SLIDER_WIDTH,
            })),
          ]}
        />
      </View>
      <PanGestureHandler
        activeOffsetX={[-10, 10]}
        onGestureEvent={onGestureEvent}>
        <Animated.View style={[styles.cursor, style]}>
          <View style={styles.cursorPoint} />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: CONTAINER_WIDTH,
    marginTop: 24,
  },
  dividerContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    borderColor: '#ffffff',
    width: SLIDER_WIDTH,
    borderWidth: 4,
    borderRadius: 4,
  },
  cursor: {
    width: CURSOR_SIZE,
    height: CURSOR_SIZE,
    borderRadius: CURSOR_SIZE * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cursorPoint: {
    borderRadius: 9,
    width: 18,
    height: 18,
    backgroundColor: '#6FDBE6',
    borderWidth: 2.5,
    borderColor: 'white',
  },
});
