import React, {ReactNode} from 'react';
import {StyleProp, Text, TextProps, TextStyle} from 'react-native';
import {DynamicViewProps} from './DynamicView';

interface RTextProps {
  children: ReactNode;
  fontFamily?: TextStyle['fontFamily'];
  lineHeight?: TextStyle['lineHeight'];
  fontSize?: TextStyle['fontSize'];
  color: TextStyle['color'];
  style?: StyleProp<TextStyle>;
  fontWeight?: TextStyle['fontWeight'];
}

const DynamicText = ({
  children,
  flex,
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
  fontFamily,
  lineHeight,
  fontSize,
  color,
  style,
  marginTop,
  marginBottom,
  marginVertical,
  marginHorizontal,
  testID,
  fontWeight,
}: RTextProps & TextProps & DynamicViewProps) => (
  <Text
    testID={testID}
    style={[
      !!fontWeight && {fontWeight},
      !!flex && {flex},
      !!padding && {padding},
      !!paddingTop && {paddingTop},
      !!paddingRight && {paddingRight},
      !!paddingBottom && {paddingBottom},
      !!paddingLeft && {paddingLeft},
      !!margin && {margin},
      !!marginTop && {marginTop},
      !!marginRight && {marginRight},
      !!marginBottom && {marginBottom},
      !!marginLeft && {marginLeft},
      !!fontFamily && {fontFamily},
      {lineHeight, fontSize, color},
      style && style,
      !!paddingVertical && {paddingVertical},
      !!paddingHorizontal && {paddingHorizontal},
      !!marginVertical && {marginVertical},
      !!marginHorizontal && {marginHorizontal},
    ]}>
    {children}
  </Text>
);

export default DynamicText;
