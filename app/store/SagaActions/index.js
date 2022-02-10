import {takeEvery, take, put} from 'redux-saga/effects';
import {REHYDRATE} from 'redux-persist/lib/constants';
import {
  LOGIN,
  LOGIN_SUCCESS,
  CHECKOUT,
  CHECKOUT_SUCCESS,
  VERIFY,
  VERIFY_SUCCESS,
  LOGOUT,
  LOGOUT_SUCCESS,
  COUNTER,
  DELETE_ITEM,
} from '../ActionTypes';
import {select} from 'redux-saga/effects';
import {Products, BestSell} from '../../screens/Home/Products';

//workers
function* loginAction({navigation, otp}) {
  try {
    const payload = {
      type: LOGIN_SUCCESS,
      loginStatus: true,
      otp: otp,
    };
    yield put(payload);
    navigation.navigate('Verify');
  } catch (err) {
    console.log('Error In LoginAction ', err);
  }
}

function* verifyAction() {
  try {
    const payload = {
      type: VERIFY_SUCCESS,
      verify: true,
    };
    yield put(payload);
  } catch (err) {
    console.log('Error In verifyAction', err);
  }
}

function* logoutAction({navigation}) {
  try {
    const payload = {
      type: LOGOUT_SUCCESS,
      verify: false,
      loginStatus: false,
    };
    const res = {
      type: CHECKOUT_SUCCESS,
      checkOutArray: [],
      totalAmount: 0,
      discount: 0,
    };
    yield put(payload);
    yield put(res);
    navigation.navigate('WelcomeScreen');
  } catch (err) {
    console.log('Error In LogoutAction ', err);
  }
}

function* checkOutAction({navigation, item}) {
  try {
    const getItems = state => state.CheckoutReducer.checkoutArr;
    const state = yield select(getItems);
    let checkOutArray = [];
    if (state.length > 0) {
      const objIndex = state.findIndex(obj => obj.uniqId === item.uniqId);
      if (objIndex !== -1) {
        //item update
        const newArr = yield state.map(obj => {
          if (obj.uniqId === item.uniqId) {
            return {
              ...obj,
              counter: obj.counter + 1,
              price: obj.price + item.price,
            };
          }
          return obj;
        });
        checkOutArray = newArr;
      } else {
        checkOutArray = [...state, item]; //new item addition with existing item
      }
    } else {
      checkOutArray.push(item); //new item
    }
    const tAmount = yield totalAmount(checkOutArray);
    const tDiscount = yield discount(tAmount);
    const setCheckoutStore = {
      type: CHECKOUT_SUCCESS,
      checkOutArray: checkOutArray,
      totalAmount: tAmount,
      discount: tDiscount,
    };
    yield put(setCheckoutStore);
    navigation.navigate('Checkout');
  } catch (err) {
    console.log('Error In CheckOutAction ', err);
  }
}

function* counterAction(item) {
  try {
    const getItems = state => state.CheckoutReducer.checkoutArr;
    const state = yield select(getItems);
    const mainArr = [...Products, ...BestSell];
    const filterArr = mainArr.filter(a => a.uniqId === item.id);
    let checkOutArray = [];
    if (state.length > 0) {
      const newArr = yield state.map(obj => {
        if (obj.uniqId === item.id) {
          if (item.param === 'plus') {
            return {
              ...obj,
              counter: obj.counter + 1,
              price: obj.price + filterArr[0].price,
            };
          } else {
            if (obj.counter > 1) {
              return {
                ...obj,
                counter: obj.counter - 1,
                price: obj.price - filterArr[0].price,
              };
            }
          }
        }
        return obj;
      });
      checkOutArray = newArr;
    }
    const tAmount = yield totalAmount(checkOutArray);
    const tDiscount = yield discount(tAmount);
    const setCheckoutStore = {
      type: CHECKOUT_SUCCESS,
      checkOutArray: checkOutArray,
      totalAmount: tAmount,
      discount: tDiscount,
    };
    yield put(setCheckoutStore);
  } catch (err) {
    console.log('Error in counterAction ', err);
  }
}

function* deleteAction(item) {
  try {
    const getItems = state => state.CheckoutReducer.checkoutArr;
    const state = yield select(getItems);
    const checkOutArray = state.filter(res => res.uniqId !== item.id);
    const tAmount = yield totalAmount(checkOutArray);
    const tDiscount = yield discount(tAmount);
    const setCheckoutStore = {
      type: CHECKOUT_SUCCESS,
      checkOutArray: checkOutArray,
      totalAmount: tAmount,
      discount: tDiscount,
    };
    yield put(setCheckoutStore);
  } catch (err) {
    console.log('Error in deleteAction : ', err);
  }
}

const discount = async totalAmount => {
  try {
    const discountPercent = 5;
    const discountCal = totalAmount - (totalAmount * discountPercent) / 100;
    return discountCal.toFixed(2);
  } catch (err) {
    console.log('Error In Discount  ', err);
  }
};

const totalAmount = async checkOutArray => {
  try {
    const totalAmount = await checkOutArray.reduce(
      (a, {price}) => a + price,
      0,
    );
    return totalAmount;
  } catch (err) {
    console.log('Error In totalAmount ', err);
  }
};

// watchers
function* rootSaga() {
  try {
    yield take(REHYDRATE);
    yield takeEvery(LOGIN, loginAction);
    yield takeEvery(CHECKOUT, checkOutAction);
    yield takeEvery(VERIFY, verifyAction);
    yield takeEvery(LOGOUT, logoutAction);
    yield takeEvery(COUNTER, counterAction);
    yield takeEvery(DELETE_ITEM, deleteAction);
  } catch (err) {
    console.log('Error IN rootSaga ', err);
  }
}

export default rootSaga;
