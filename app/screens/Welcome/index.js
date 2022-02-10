import React, {useCallback} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {CustomButtonWithBG} from '../../components/CustomButton';
import {styles} from './styles';

const Index = () => {
  const navigation = useNavigation();
  const onPress = useCallback(() => {
    navigation.navigate('Login');
  }, []);
  const gotToHome = useCallback(() => {
    navigation.navigate('DrawerNav');
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Bolt</Text>
      <Image
        style={styles.welcomeLogo}
        source={require('../../assests/Images/welcome.png')}
      />
      <CustomButtonWithBG
        style={styles.button}
        buttonPress={onPress}
        title={'Login with phone'}
      />
      <TouchableOpacity style={styles.touchable} onPress={gotToHome}>
        <Text style={styles.shopWithUs}>Shop with us</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Index;
