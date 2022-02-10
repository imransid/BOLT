import {CHECKOUT, CHECKOUT_SUCCESS, COUNTER, DELETE_ITEM} from '../ActionTypes';

const initialState = {
  loginStatus: false,
  checkoutArr: [],
};

const CheckoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT: {
      return {
        ...state,
        loading: true,
      };
    }
    case CHECKOUT_SUCCESS: {
      return {
        ...state,
        loading: false,
        checkoutArr: action.checkOutArray,
        totalAmount: action.totalAmount,
        discount: action.discount,
      };
    }

    case COUNTER: {
      return {
        ...state,
        loading: true,
      };
    }

    case DELETE_ITEM: {
      return {
        ...state,
        loading: true,
      };
    }
    default:
      return state;
  }
};

export default CheckoutReducer;
