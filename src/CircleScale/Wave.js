import {StyleSheet} from 'react-native';
import React, {useEffect, useRef} from 'react';
import WaveView from 'react-native-waveview';
import PropTypes from 'prop-types';

import {DynamicView, DynamicText} from '../components';

const Wave = ({heightPercentage}) => {
  const waveRef = useRef(null);

  useEffect(() => {
    if (waveRef && waveRef.current) {
      waveRef.current.setWaterHeight((heightPercentage / 100) * 120);
    }
  }, [heightPercentage, waveRef]);

  return (
    <DynamicView
      position="absolute"
      alignItems="center"
      justifyContent="center"
      backgroundColor={'#6FDBE6'}
      width={120}
      height={120}
      borderRadius={60}>
      <WaveView
        animated
        ref={waveRef}
        style={styles.waveBall}
        H={0}
        waveParams={[
          {A: 20, T: 140, fill: 'rgba(184,239,244,0.5)'},
          {A: 15, T: 160, fill: 'rgba(184,239,244,0.5)'},
          {A: 10, T: 180, fill: 'rgba(184,239,244,0.5)'},
        ]}
      />
      <DynamicText
        fontSize={28}
        fontWeight="bold"
        color="#fff"
        position="absolute">
        {((heightPercentage / 100) * 10).toFixed(2)}
      </DynamicText>
    </DynamicView>
  );
};

Wave.propTypes = {
  heightPercentage: PropTypes.number.isRequired,
};

export default Wave;

const styles = StyleSheet.create({
  waveBall: {
    width: 120,
    aspectRatio: 1,
    borderRadius: 75,
    overflow: 'hidden',
    backgroundColor: 'transparent',
    position: 'absolute',
  },
});
