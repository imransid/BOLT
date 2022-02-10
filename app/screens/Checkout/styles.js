import {StyleSheet} from 'react-native';
import {hdp, wdp} from '../../styles/Dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: wdp(20),
  },
  checkOut: {
    color: '#323232',
    fontSize: hdp(30),
    marginTop: hdp(10),
  },
  button: {
    marginBottom: hdp(10),
    marginTop: hdp(10),
  },
  address: {
    color: '#000',
    fontSize: hdp(18),
    marginTop: hdp(10),
  },
  hr: {
    borderBottomColor: '#F4F3F3',
    borderBottomWidth: 2,
    marginVertical: hdp(10),
  },
  cardInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: wdp(5),
  },
  infoText: {
    color: '#919191',
    fontSize: hdp(16),
  },
  number: {
    color: '#434343',
    fontSize: hdp(16),
  },
});
