import service from '../../services';
import AsyncStorage from '@react-native-community/async-storage';
// import localStorage from "../../utils/local-storage";

const testing = (dispatch, value) => {
  dispatch(value);
};
const login = async (dispatch, value) => {
  const result = await service(value);
  if (result) {
    console.log(result);
    // try {
    //   userToken = await AsyncStorage.getItem('userToken');
    // } catch (e) {
    //   // Restoring token failed
    // }
    dispatch({
      reducer: value.reducer,
      group: value.group,
      key: value.key,
      data: result.response,
      message: result.message,
      type: result.type,
      isError: result.error,
      isSuccess: result.success,
    });
  }
};

const clearData = (dispatch, value) => {
  dispatch(value);
};
const productPurchase = (dispatch, value) => {
  dispatch(value);
};

const fetch = async (dispatch, value) => {
  const result = await service(value);

  if (result) {
    dispatch({
      reducer: value.reducer,
      group: value.group,
      key: value.key,
      data: result.response,
      message: result.message,
      type: result.type,
      isError: result.error,
      isSuccess: result.success,
    });
  }
};

const servicesAction = (dispatch) => ({
  reduxFetch: (value) => {
    fetch(dispatch, value);
  },
  reduxClear: (value) => {
    clearData(dispatch, value);
  },
  reduxTesting: (value) => {
    testing(dispatch, value);
  },
  reduxLogin: (value) => {
    login(dispatch, value);
  },
  reduxProductPurchase: (value) => {
    productPurchase(dispatch, value);
  },
});

export default servicesAction;
