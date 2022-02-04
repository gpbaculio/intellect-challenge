import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  useWindowDimensions,
} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import {DynamicView, Header} from './src/components';

const App = () => {
  const translateX = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: ({contentOffset}) => {
      translateX.value = contentOffset.x;
    },
  });

  const {width, height} = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <Header translateX={translateX} />
      <Animated.ScrollView
        bounces={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        horizontal
        decelerationRate="fast"
        snapToInterval={width}
        showsHorizontalScrollIndicator={false}>
        <DynamicView
          width={width}
          height={height}
          flex={1}
          backgroundColor={'#325D6E'}
        />
        <DynamicView
          width={width}
          height={height}
          flex={1}
          backgroundColor={'#325D6E'}
        />
        <DynamicView
          width={width}
          height={height}
          flex={1}
          backgroundColor={'#325D6E'}
        />
        <DynamicView
          width={width}
          height={height}
          flex={1}
          backgroundColor={'#325D6E'}
        />
        <DynamicView
          width={width}
          height={height}
          flex={1}
          backgroundColor={'#325D6E'}
        />
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default App;
