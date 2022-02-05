import {
  Platform,
  Pressable,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import React, {forwardRef, useState} from 'react';
import Svg, {Circle} from 'react-native-svg';
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedProps,
  useAnimatedReaction,
  useSharedValue,
} from 'react-native-reanimated';
import {ScrollView} from 'react-native-gesture-handler';

import {DynamicView, DynamicText} from '../components';
import Wave from './Wave';
import Slider, {SLIDER_WIDTH} from './Slider';

const STROKE_COLOR = '#A6E1FA';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const CircleScale = forwardRef<Animated.ScrollView, {}>((_, scrollRef) => {
  const {width, height} = useWindowDimensions();
  const CIRCLE_LENGTH = (width / 1.2) * 2; // 2PI*R
  const R = CIRCLE_LENGTH / (2 * Math.PI);

  const progress = useSharedValue(0);
  const translateX = useSharedValue(0);
  const [heightPercentage, setheightPercentage] = useState(0);

  useAnimatedReaction(
    () => translateX.value,
    x => {
      const p = (x / SLIDER_WIDTH) * 100;
      runOnJS(setheightPercentage)(p);
      progress.value = interpolate(p, [0, 100], [0, 1]);
    },
  );

  return (
    <DynamicView
      flex={1}
      backgroundColor={'#325D6E'}
      alignItems="center"
      justifyContent="space-between"
      paddingBottom={Platform.OS === 'ios' ? 12 : 0}>
      <DynamicView width={width} paddingHorizontal={16}>
        <DynamicView
          marginTop={16}
          marginHorizontal={4}
          marginBottom={32}
          flexDirection="row"
          justifyContent="space-between">
          <DynamicText color={'#fff'}>
            RESCUE SESSION: ANGER & FRUSTRATION
          </DynamicText>
          <DynamicText color={'#fff'}>X</DynamicText>
        </DynamicView>
        <DynamicText
          fontWeight="bold"
          fontSize={21}
          marginHorizontal={4}
          color={'#fff'}>
          Pick the level of your anger & frustration right now
        </DynamicText>
      </DynamicView>
      <DynamicView flex={1} alignItems="center" justifyContent="center">
        <DynamicView
          display="flex"
          flexDirection="column"
          height={300}
          alignItems="center"
          justifyContent="center">
          <Svg height={285} width="100%" style={styles.backgroundSvg}>
            <Circle
              cx={width / 2}
              cy={285 / 2}
              r="140"
              fill="none"
              stroke={'#7E9AA5'}
              strokeWidth={4}
              strokeDasharray={[20, 20]}
            />
            <Circle cx={width / 2} cy={285 / 2} r={R} fill="#456D7C" />
          </Svg>
          <DynamicView position="absolute" style={styles.rotatorView}>
            <Svg width={width} height={height / 2}>
              <AnimatedCircle
                cx={width / 2}
                cy={height / 2 / 2}
                r={R}
                stroke={STROKE_COLOR}
                strokeWidth={15 / 2}
                strokeDasharray={CIRCLE_LENGTH}
                animatedProps={useAnimatedProps(() => ({
                  strokeDashoffset: CIRCLE_LENGTH * (1 - progress.value),
                }))}
                strokeLinecap={'round'}
              />
            </Svg>
          </DynamicView>
          <Wave heightPercentage={heightPercentage} />
        </DynamicView>
        <Slider heightPercentage={heightPercentage} translateX={translateX} />
      </DynamicView>
      <Pressable
        onPress={() => {
          if (scrollRef && (scrollRef as React.RefObject<ScrollView>).current) {
            (
              (scrollRef as React.RefObject<ScrollView>).current as ScrollView
            ).scrollTo({
              x: width * 1,
              animated: true,
            });
          }
        }}>
        <DynamicView
          backgroundColor={'#fff'}
          width={width / 1.2}
          alignItems="center"
          paddingVertical={8}
          borderRadius={32}>
          <DynamicText fontWeight="bold" color={'#000'}>
            Next
          </DynamicText>
        </DynamicView>
      </Pressable>
    </DynamicView>
  );
});

export default CircleScale;

const styles = StyleSheet.create({
  backgroundSvg: {
    position: 'absolute',
  },
  rotatorView: {transform: [{rotate: '-90deg'}]},
});
