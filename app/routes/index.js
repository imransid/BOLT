import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/Welcome';
import Login from '../screens/Login';
import Verify from '../screens/Verify';
import Checkout from '../screens/Checkout';
import DrawerNav from './DrawerNavigation';
import {Dimensions} from '../styles';
import {forSlide} from '../hooks/animation';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const Routes = () => {
  const checkVerify = useSelector(state => state.AuthReducer.verify); //store
  return (
    <Stack.Navigator
      initialRouteName={checkVerify ? 'DrawerNav' : 'WelcomeScreen'}
      screenOptions={({route}) => ({
        headerShown: false,
        cardStyleInterpolator: forSlide,
        gestureEnabled: true,
        gestureResponseDistance: {
          horizontal: Dimensions.screenHeight,
          vertical: Dimensions.screenWidth,
        },
      })}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Verify" component={Verify} />
      <Stack.Screen name="DrawerNav" component={DrawerNav} />
      <Stack.Screen name="Checkout" component={Checkout} />
    </Stack.Navigator>
  );
};

export default Routes;
