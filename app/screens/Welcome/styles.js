import {StyleSheet} from 'react-native';
import {hdp, wdp} from '../../styles/Dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  title: {
    color: '#707070',
    fontSize: hdp(20),
    position: 'absolute',
    top: '10%',
  },
  welcomeLogo: {
    height: hdp(263),
    width: wdp(350),
    position: 'absolute',
    top: '28%',
  },
  shopWithUs: {
    color: '#707070',
    fontSize: hdp(16),
  },
  button: {
    position: 'absolute',
    top: '72%',
  },
  touchable: {
    marginTop: hdp(10),
    position: 'absolute',
    top: '81%',
  },
});
