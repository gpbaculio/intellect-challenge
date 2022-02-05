import React, {ReactNode} from 'react';
import {StyleProp, View, ViewProps, ViewStyle} from 'react-native';
import Animated, {AnimatedStyleProp} from 'react-native-reanimated';

export interface DynamicViewProps {
  children?: ReactNode;
  flexDirection?: ViewStyle['flexDirection'];
  alignItems?: ViewStyle['alignItems'];
  justifyContent?: ViewStyle['justifyContent'];
  flex?: ViewStyle['flex'];
  padding?: ViewStyle['padding'];
  paddingRight?: ViewStyle['paddingRight'];
  paddingLeft?: ViewStyle['paddingLeft'];
  paddingTop?: ViewStyle['paddingTop'];
  paddingBottom?: ViewStyle['paddingBottom'];
  paddingVertical?: ViewStyle['paddingVertical'];
  paddingHorizontal?: ViewStyle['paddingHorizontal'];
  margin?: ViewStyle['margin'];
  marginRight?: ViewStyle['marginRight'];
  marginLeft?: ViewStyle['marginLeft'];
  marginTop?: ViewStyle['marginTop'];
  marginBottom?: ViewStyle['marginBottom'];
  marginVertical?: ViewStyle['marginVertical'];
  marginHorizontal?: ViewStyle['marginHorizontal'];
  style?: StyleProp<ViewStyle>;
  animatedStyle?: AnimatedStyleProp<ViewStyle>;
  borderTopWidth?: ViewStyle['borderTopWidth'];
  borderTopColor?: ViewStyle['borderTopColor'];
  borderLeftWidth?: ViewStyle['borderLeftWidth'];
  borderLeftColor?: ViewStyle['borderLeftColor'];
  borderRightWidth?: ViewStyle['borderRightWidth'];
  borderRightColor?: ViewStyle['borderRightColor'];
  borderBottomWidth?: ViewStyle['borderBottomWidth'];
  borderBottomColor?: ViewStyle['borderBottomColor'];
  borderWidth?: ViewStyle['borderWidth'];
  borderColor?: ViewStyle['borderColor'];
  borderRadius?: ViewStyle['borderRadius'];
  borderTopLeftRadius?: ViewStyle['borderTopLeftRadius'];
  borderTopRightRadius?: ViewStyle['borderTopRightRadius'];
  borderBottomLeftRadius?: ViewStyle['borderBottomLeftRadius'];
  borderBottomRightRadius?: ViewStyle['borderBottomRightRadius'];
  width?: ViewStyle['width'];
  height?: ViewStyle['height'];
  backgroundColor?: ViewStyle['backgroundColor'];
  position?: ViewStyle['position'];
  left?: ViewStyle['left'];
  right?: ViewStyle['right'];
  top?: ViewStyle['top'];
  bottom?: ViewStyle['bottom'];
  display?: ViewStyle['display'];
  testID?: string;
  opacity?: ViewStyle['opacity'];
  zIndex?: ViewStyle['zIndex'];
}

const DynamicView = ({
  children,
  flex,
  flexDirection,
  justifyContent,
  alignItems,
  padding,
  paddingRight,
  paddingLeft,
  paddingTop,
  paddingBottom,
  paddingVertical,
  paddingHorizontal,
  margin,
  marginRight,
  marginLeft,
  marginTop,
  marginBottom,
  marginVertical,
  marginHorizontal,
  style,
  borderTopWidth,
  borderTopColor,
  borderLeftWidth,
  borderLeftColor,
  borderRightWidth,
  borderRightColor,
  borderBottomWidth,
  borderBottomColor,
  borderWidth,
  borderColor,
  borderRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  width,
  backgroundColor,
  height,
  position,
  left,
  right,
  top,
  bottom,
  display,
  testID,
  opacity,
  zIndex,
  animatedStyle,
  ...rest
}: DynamicViewProps & ViewProps) => {
  const viewStyle = [
    {
      flex,
      flexDirection,
      justifyContent,
      alignItems,
      padding,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      paddingVertical,
      paddingHorizontal,
      margin,
      marginTop,
      marginRight,
      marginBottom,
      marginLeft,
      marginVertical,
      marginHorizontal,
      opacity,
      zIndex,
      borderTopWidth,
      borderTopColor,
      borderLeftWidth,
      borderLeftColor,
      borderRightWidth,
      borderRightColor,
      borderBottomWidth,
      borderBottomColor,
      borderWidth,
      borderColor,
      borderRadius,
      borderTopLeftRadius,
      borderTopRightRadius,
      borderBottomLeftRadius,
      borderBottomRightRadius,
      width,
      backgroundColor,
      height,
      position,
      left,
      right,
      top,
      bottom,
      display,
    },
    style && style,
  ];

  return animatedStyle ? (
    <Animated.View testID={testID} style={[viewStyle, animatedStyle]} {...rest}>
      {children}
    </Animated.View>
  ) : (
    <View testID={testID} style={viewStyle} {...rest}>
      {children}
    </View>
  );
};

export default DynamicView;
