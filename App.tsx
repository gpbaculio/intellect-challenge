import React from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

import {CircleScale, Pyramid, Header, DynamicView, DynamicText} from './src';

const App = () => {
  const translateX = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: ({contentOffset}) => {
      translateX.value = contentOffset.x;
    },
  });

  const {width, height} = useWindowDimensions();

  const scrollRef = useAnimatedRef<Animated.ScrollView>();

  return (
    <GestureHandlerRootView style={styles.root}>
      <StatusBar backgroundColor="#325D6E" />
      <DynamicView
        flex={1}
        paddingTop={Platform.OS === 'ios' ? 16 : 8}
        paddingBottom={24}
        backgroundColor={'#325D6E'}>
        <Header translateX={translateX} />
        <Animated.ScrollView
          ref={scrollRef}
          bounces={false}
          onScroll={onScroll}
          scrollEventThrottle={16}
          horizontal
          decelerationRate="fast"
          snapToInterval={width}
          showsHorizontalScrollIndicator={false}>
          <CircleScale ref={scrollRef} />
          <Pyramid ref={scrollRef} />
          <DynamicView
            width={width}
            height={height}
            flex={1}
            backgroundColor={'#325D6E'}
            alignItems="center"
            justifyContent="center">
            <DynamicText color={'#fff'}>3</DynamicText>
          </DynamicView>
          <DynamicView
            width={width}
            height={height}
            flex={1}
            backgroundColor={'#325D6E'}
            alignItems="center"
            justifyContent="center">
            <DynamicText color={'#fff'}>4</DynamicText>
          </DynamicView>
          <DynamicView
            width={width}
            height={height}
            flex={1}
            alignItems="center"
            justifyContent="center"
            backgroundColor={'#325D6E'}>
            <DynamicText color={'#fff'}>5</DynamicText>
          </DynamicView>
        </Animated.ScrollView>
      </DynamicView>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 32 : 0,
    backgroundColor: '#325D6E',
  },
});
