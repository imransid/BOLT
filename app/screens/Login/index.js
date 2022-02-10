import React, {useCallback, useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {bindActionCreators} from 'redux';
import {useDispatch} from 'react-redux';
import {ActionCreators} from '../../store';
import PhoneNumber from 'awesome-phonenumber';
import {Header} from '../../components/Header';
import {CustomButtonWithBG} from '../../components/CustomButton';
import {CustomModal} from '../../components/Modal';
import {styles} from './styles';

const Index = () => {
  const [number, onChangeNumber] = useState('+8801911111111');
  const [modalVisible, setModalVisible] = useState(false);
  const [OTP, setOTP] = useState('');

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {loginAction} = bindActionCreators(ActionCreators, dispatch);

  const backButtonPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const loginPress = useCallback(async () => {
    const region = PhoneNumber(number).getRegionCode();
    let checkValid = new PhoneNumber(number, region);
    const condition = checkValid.isValid() && checkValid.isMobile();
    if (!condition) {
      alert('Phone number is invalid!');
    } else {
      var val = Math.floor(1000 + Math.random() * 9000); //random number
      setOTP(val.toString());
      setModalVisible(true);
    }
  }, [number, OTP, modalVisible]);

  return (
    <View style={styles.container}>
      <CustomModal
        OTP={OTP}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        loginAction={loginAction}
        navigation={navigation}
      />
      <Header onPress={backButtonPress} />
      <Text style={styles.login}>Login</Text>
      <Text style={styles.phone}>Phone</Text>
      <TextInput
        style={styles.input}
        onChangeText={val => onChangeNumber(val)}
        value={number}
        placeholder="Ex: +8801*********"
        keyboardType="numeric"
        placeholderTextColor="#747474"
      />
      <CustomButtonWithBG
        style={styles.button}
        buttonPress={loginPress}
        title={'Login'}
      />
    </View>
  );
};

export default Index;
