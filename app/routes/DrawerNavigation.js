import * as React from 'react';
import Home from '../screens/Home';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function DrawerNav() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={Home}
        // options={{drawerLabel: 'Home'}}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNav;
