import {View, Text, Platform, useWindowDimensions} from 'react-native';
import React, {useState} from 'react';
import {G, Path} from 'react-native-svg';
import * as d3 from 'd3';

const lineGenerator = d3
  .line()
  .x(d => d[0])
  .y(d => d[1])
  .curve(d3.curveCardinalClosed.tension(0.55));

const PyramidLayer = ({index}: {index: number}) => {
  const multiplier = index * (Platform.OS === 'ios' ? 60 : 64);
  const {width} = useWindowDimensions();
  const x1 = width / 4,
    x2 = width / 4 + 12,
    x3 = (width / 4) * 3 - 12,
    x4 = (width / 4) * 3;
  const [background, setBackground] = useState('#4B7180');
  return (
    <G
      onPress={() => {
        setBackground(b => (b === '#fff' ? '#4B7180' : '#fff'));
      }}>
      <Path
        d={
          lineGenerator([
            [x1 + multiplier / 3, 5 + multiplier],
            [x2 + multiplier / 3, 40 + multiplier],
            [x3 - multiplier / 3, 40 + multiplier],
            [x4 - multiplier / 3, 5 + multiplier],
          ] as [number, number][]) as string
        }
        fill={background}
      />
    </G>
  );
};

export default PyramidLayer;
