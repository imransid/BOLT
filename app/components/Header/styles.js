import {StyleSheet} from 'react-native';
import {hdp, wdp, HEADER_HEIGHT} from '../../styles/Dimensions';

export const styles = StyleSheet.create({
  backButtonContainer: {
    height: HEADER_HEIGHT,
    width: wdp(27),
    marginTop: wdp(20),
    justifyContent: 'center',
    // position: 'absolute',
    // top: hdp(10),
    // left: wdp(20),
  },
  backButton: {
    width: '100%',
  },
});
