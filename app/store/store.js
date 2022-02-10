import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import reducers from './Reducers/RootReducer';
import SagaActions from './SagaActions';
import {persistStore, persistReducer} from 'redux-persist';
import logger from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';

const sagaMiddleWare = createSagaMiddleware();
const middleware = [sagaMiddleWare, thunk];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const persistedReducer = persistReducer(persistConfig, reducers);

let store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

let persistor = persistStore(store);

sagaMiddleWare.run(SagaActions);

export {store, persistor};
