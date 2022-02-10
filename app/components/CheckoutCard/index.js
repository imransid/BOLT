import React, {memo} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {ActionCreators} from '../../store';
import {bindActionCreators} from 'redux';
import {styles} from './styles';
import {MinusIcon, PlusIcon} from '../../assests/svg';

const CheckoutCard = memo(
  ({item: {id, imageUrl, price, company, title, counter, uniqId}}) => {
    const dispatch = useDispatch();
    const {counterAction, deleteAction} = bindActionCreators(
      ActionCreators,
      dispatch,
    );
    return (
      <View style={styles.container} key={id}>
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={imageUrl} />
        </View>
        <View style={styles.deatilsContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.company}>{company}</Text>
          <Text style={styles.price}>${price}.00</Text>
          <View style={styles.counterContainer}>
            <TouchableOpacity
              style={styles.touch}
              onPress={() => counterAction('minus', uniqId, price)}>
              <MinusIcon />
            </TouchableOpacity>
            <Text style={styles.number}>{counter}</Text>
            <TouchableOpacity
              style={styles.touch}
              onPress={() => counterAction('plus', uniqId, price)}>
              <PlusIcon />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.crossButton}
          onPress={() => deleteAction(uniqId)}>
          <Image
            style={styles.cross}
            source={require('../../assests/Images/cross.png')}
          />
        </TouchableOpacity>
      </View>
    );
  },
);

export default CheckoutCard;
