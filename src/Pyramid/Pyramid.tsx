import {
  Platform,
  Pressable,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import React, {forwardRef} from 'react';
import Animated from 'react-native-reanimated';
import Svg, {G, Path} from 'react-native-svg';

import {DynamicView, DynamicText} from '../components';
import PyramidLayer from './PyramidLayer';
import {ScrollView} from 'react-native-gesture-handler';

const Pyramid = forwardRef<Animated.ScrollView, {}>((_, scrollRef) => {
  const {width, height} = useWindowDimensions();

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
      <DynamicView
        flex={1}
        height={350}
        alignItems="center"
        width="100%"
        justifyContent="center">
        <DynamicText
          fontSize={16}
          marginBottom={12}
          fontWeight="bold"
          color={'#fff'}>
          Low
        </DynamicText>
        <Svg height={300} width="100%">
          {new Array(5).fill(0).map((_, index) => (
            <PyramidLayer key={`pyramid:${index}`} index={index} />
          ))}
        </Svg>
      </DynamicView>
      <Pressable
        onPress={() => {
          if (scrollRef && (scrollRef as React.RefObject<ScrollView>).current) {
            (
              (scrollRef as React.RefObject<ScrollView>).current as ScrollView
            ).scrollTo({
              x: width * 2,
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

export default Pyramid;

const styles = StyleSheet.create({
  backgroundSvg: {
    position: 'absolute',
  },
  rotatorView: {transform: [{rotate: '-90deg'}]},
});
