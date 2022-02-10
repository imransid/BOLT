import {StyleSheet} from 'react-native';

import {hdp, wdp} from '../../styles/Dimensions';

export const styles = StyleSheet.create({
  container: {
    borderColor: '#fff',
    borderWidth: 1,
    shadowColor: '#C4C1C1',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    marginVertical: hdp(10),
    flexDirection: 'row',
    height: hdp(133),
    paddingHorizontal: hdp(10),
    paddingVertical: hdp(10),
    justifyContent: 'center',
    paddingVertical: hdp(15),
  },
  touch: {
    padding: hdp(10),
  },
  imgContainer: {
    flex: 1,
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deatilsContainer: {
    width: '40%',
    paddingLeft: wdp(10),
    paddingTop: hdp(5),
  },
  crossButton: {
    width: '20%',
  },
  img: {
    height: '100%',
    width: '100%',
  },
  cross: {
    margin: hdp(10),
    height: hdp(11),
    width: wdp(11),
    position: 'absolute',
    right: 0,
    top: 0,
  },
  title: {
    color: '#434343',
    fontSize: hdp(16),
  },
  company: {
    color: '#919191',
    fontSize: hdp(14),
  },
  price: {
    color: '#374ABE',
    fontSize: hdp(16),
  },
  counterContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'red',
    borderColor: '#C4C1C1',
    borderWidth: 1,
    backgroundColor: '#F6F6F6',
    // paddingHorizontal: hdp(10),
  },
  number: {
    color: '#565656',
    // fontSize: hdp(15),
  },
});
