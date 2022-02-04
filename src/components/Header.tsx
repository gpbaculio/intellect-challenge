import {View, Text, useWindowDimensions} from 'react-native';
import React from 'react';
import Animated, {
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import DynamicView from './DynamicView';

const Header = ({translateX}: {translateX: Animated.SharedValue<number>}) => {
  const {width} = useWindowDimensions();
  return (
    <DynamicView
      width={width}
      height={20}
      backgroundColor={'#325D6E'}
      flexDirection="row"
      justifyContent="space-between"
      padding={6}>
      {new Array(5).fill(0).map((_, index) => {
        const animatedStyle = useAnimatedStyle(() => {
          const backgroundColor = interpolateColor(
            translateX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            ['#92AAB4', '#ffffff', '#92AAB4'],
          );

          return {
            backgroundColor,
          };
        });
        return (
          <DynamicView
            borderRadius={4}
            key={index}
            backgroundColor={'green'}
            width={width / 6}
            isAnimated
            animatedStyle={animatedStyle}
          />
        );
      })}
    </DynamicView>
  );
};

export default Header;
