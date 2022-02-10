import React, {useEffect} from 'react';
import {StatusBar, SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import Routes from './routes';
//import redux
import {Provider} from 'react-redux';
import {store, persistor} from './store/store';
import {PersistGate} from 'redux-persist/integration/react';

//app default background color
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaView style={styles.globalContainer}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer theme={MyTheme}>
            <Routes />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  globalContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

export default App;
