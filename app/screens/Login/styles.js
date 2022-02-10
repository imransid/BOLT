import {StyleSheet} from 'react-native';
import {hdp, wdp} from '../../styles/Dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: wdp(30),
  },
  login: {
    color: '#323232',
    fontSize: hdp(30),
    marginTop: hdp(20),
  },
  phone: {
    color: '#A6A6A6',
    fontSize: hdp(14),
    marginTop: hdp(30),
    marginLeft: wdp(10),
  },
  input: {
    marginLeft: wdp(7),
    borderBottomColor: '#E2E2E2',
    borderBottomWidth: 2,
    marginBottom: hdp(30),
    width: '85%',
    height: hdp(50),
    fontSize: hdp(18),
    color: '#2C2C2C',
  },
  button: {
    marginTop: hdp(30),
  },
});
