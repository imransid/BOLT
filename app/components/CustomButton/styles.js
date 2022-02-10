import {StyleSheet} from 'react-native';
import {Colors, Dimensions} from '../../styles';
import {wdp} from '../../styles/Dimensions';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: wdp(8),
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: wdp(0.8),
    shadowRadius: wdp(2),
    elevation: 5,
  },
  btn: {
    width: '100%',
    height: '100%',
  },
  press: {
    width: '100%',
    height: Dimensions.BUTTON_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: Colors.WHITE,
  },
});
