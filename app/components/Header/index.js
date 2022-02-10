import React, {memo} from 'react';
import {TouchableOpacity, Image, View} from 'react-native';
import {styles} from './styles';

export const Header = memo(({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.backButtonContainer}>
        <Image
          style={styles.backButton}
          source={require('../../assests/Images/BackButton.png')}
        />
      </View>
    </TouchableOpacity>
  );
});
