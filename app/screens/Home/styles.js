import {StyleSheet} from 'react-native';
import {hdp, wdp} from '../../styles/Dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: wdp(20),
  },
  drawer: {
    height: hdp(18),
    width: wdp(24),
    marginVertical: hdp(20),
  },
});
