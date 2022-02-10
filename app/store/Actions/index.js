import {
  LOGIN,
  CHECKOUT,
  VERIFY,
  LOGOUT,
  COUNTER,
  DELETE_ITEM,
} from '../ActionTypes';

export const loginAction = (navigation, otp) => {
  return {
    type: LOGIN,
    navigation: navigation,
    otp: otp,
  };
};

export const checkOutAction = (navigation, item) => {
  return {
    type: CHECKOUT,
    navigation: navigation,
    item: item,
  };
};

export const verifyAction = () => {
  return {
    type: VERIFY,
  };
};

export const LogOut = navigation => {
  return {
    type: LOGOUT,
    navigation: navigation,
  };
};

export const counterAction = (param, uniqId, price) => {
  return {
    type: COUNTER,
    param: param,
    id: uniqId,
    price: price,
  };
};

export const deleteAction = id => {
  return {
    type: DELETE_ITEM,
    id: id,
  };
};
