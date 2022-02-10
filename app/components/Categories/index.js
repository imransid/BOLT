import React, {useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {hdp, wdp} from '../../styles/Dimensions';

const Categories = () => {
  const arr = [
    {
      id: 1,
      imageUrl: require('../../assests/Images/womans.png'),
      title: 'Woman',
    },
    {
      id: 2,
      imageUrl: require('../../assests/Images/mans.png'),
      title: 'man',
    },
    {
      id: 3,
      imageUrl: require('../../assests/Images/kids.png'),
      title: 'kids',
    },
  ];

  const renderItem = useCallback(({item: {id, imageUrl, title}}) => {
    return (
      <TouchableOpacity style={styles.wrap} key={id} onPress={() => null}>
        <Image style={styles.img} source={imageUrl} />
        <Text style={styles.titleText}>{title}</Text>
      </TouchableOpacity>
    );
  }, []);

  return (
    <View>
      <Text style={styles.categories}>Categories</Text>
      <FlatList
        data={arr}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  categories: {
    fontSize: hdp(22),
    color: '#434343',
  },
  wrap: {
    marginRight: wdp(10),
    marginVertical: hdp(10),
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {width: 10, height: 10},
    shadowColor: '#000',
    shadowOpacity: 1,
    elevation: 6,
    height: hdp(68),
  },
  img: {
    height: hdp(65),
    width: wdp(114),
    borderRadius: hdp(5),
  },
  titleText: {
    position: 'absolute',
    color: '#fff',
    fontSize: hdp(14),
  },
});

export default Categories;
