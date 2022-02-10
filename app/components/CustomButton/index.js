import React, {useMemo, memo} from 'react';
import {View, Text, Pressable, ImageBackground} from 'react-native';
import {Colors, Dimensions} from '../../styles';
import {wdp} from '../../styles/Dimensions';
import {styles} from './styles';

const buttonBG = require('../../assests/Images/buttonBG.png');

export const CustomButtonWithBG = memo(
  ({title, buttonPress, width, fontSize, height, color, style}) => {
    const wrapperStyle = useMemo(
      () => [
        styles.container,
        {
          width: !width ? '90%' : width,
          height: !height ? Dimensions.BUTTON_HEIGHT : wdp(height),
        },
      ],
      [width, height],
    );

    const titleStyle = useMemo(
      () => [
        styles.title,
        {
          fontSize: !fontSize ? wdp(16) : wdp(fontSize),
          color: !color ? Colors.WHITE : color,
        },
      ],
      [fontSize, color],
    );

    return (
      <View style={[wrapperStyle, style]}>
        <ImageBackground source={buttonBG} style={styles.btn}>
          <Pressable
            onPress={buttonPress}
            android_ripple={{color: 'rgba(0, 0, 0, 0.3)'}}
            style={styles.press}>
            <Text style={titleStyle}>{title}</Text>
          </Pressable>
        </ImageBackground>
      </View>
    );
  },
);
