import {combineReducers} from 'redux';

//Import all reducers in here
import AuthReducer from './AuthReducer';
import CheckoutReducer from './CheckoutReducer';

export default combineReducers({
  AuthReducer,
  CheckoutReducer,
});
