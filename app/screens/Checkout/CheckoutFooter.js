import React, {memo, useMemo} from 'react';
import {Text, View} from 'react-native';
import {CustomButtonWithBG} from '../../components/CustomButton';
import {useSelector} from 'react-redux';
import {styles} from './styles';

export const Footer = memo(({setChecked}) => {
  const store = useSelector(state => state.CheckoutReducer); //store
  const total = useMemo(
    () =>
      store.discount === '0.00'
        ? 0
        : parseFloat(store.discount) + parseFloat(10),
    [store],
  );
  return (
    <>
      <Text style={styles.address}>
        Shewrapara, Mirpur, Dhaka-1216 House no: 938 Road no: 9
      </Text>
      <View style={styles.hr} />
      <View style={styles.cardInfoContainer}>
        <Text style={styles.infoText}>SubTotal</Text>
        <Text style={styles.number}>${store.totalAmount}.00</Text>
      </View>
      <View style={styles.cardInfoContainer}>
        <Text style={styles.infoText}>Discount</Text>
        <Text style={styles.number}>5%</Text>
      </View>
      <View style={styles.cardInfoContainer}>
        <Text style={styles.infoText}>Shipping</Text>
        <Text style={styles.number}>$10.00</Text>
      </View>
      <View style={styles.hr} />
      <View style={styles.cardInfoContainer}>
        <Text style={styles.infoText}>Total</Text>
        <Text style={styles.number}>${total.toFixed(2)}</Text>
      </View>
      <CustomButtonWithBG
        style={styles.button}
        buttonPress={() => setChecked(false)}
        title={'Checkout'}
        width={'100%'}
      />
    </>
  );
});
