import axios from '@/axios';

export const GET_PRODUCT_LIST = 'GET_PRODUCT_LIST';
export const GET_CART_LIST = 'GET_CART_LIST';
export const GET_CATEGORY_LIST = 'GET_CATEGORY_LIST';
export const GET_RATING_LIST = 'GET_RATING_LIST';
export const GET_BRAND_LIST = 'GET_BRAND_LIST';

export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const DELETE_PRODUCT_FROM_CART = 'DELETE_PRODUCT_FROM_CART';

export const UPDATE_CART_AMOUNT = 'UPDATE_CART_AMOUNT';

export const getProductList: any = () => (dispatch: any) => {
  axios.get('/api/ecommerce/get-product-list').then((res) => {
    dispatch({
      type: GET_PRODUCT_LIST,
      payload: res.data,
    });
  });
};

export const getCategoryList: any = () => (dispatch: any) => {
  axios.get('/api/ecommerce/get-category-list').then((res) => {
    dispatch({
      type: GET_CATEGORY_LIST,
      payload: res.data,
    });
  });
};

export const getRatingList: any = () => (dispatch: any) => {
  axios.get('/api/ecommerce/get-rating-list').then((res) => {
    dispatch({
      type: GET_RATING_LIST,
      payload: res.data,
    });
  });
};

export const getBrandList: any = () => (dispatch: any) => {
  axios.get('/api/ecommerce/get-brand-list').then((res) => {
    dispatch({
      type: GET_BRAND_LIST,
      payload: res.data,
    });
  });
};

export const getCartList: any = (uid: any) => (dispatch: any) => {
  axios.get('/api/ecommerce/get-cart-list', { data: uid }).then((res) => {
    dispatch({
      type: GET_CART_LIST,
      payload: res.data,
    });
  });
};

export const addProductToCart: any = (uid: any, productId: any) => (dispatch: any) => {
  axios.post('/api/ecommerce/add-to-cart', { uid, productId }).then((res) => {
    console.log(res.data);
    dispatch({
      type: ADD_PRODUCT_TO_CART,
      payload: res.data,
    });
  });
};

export const deleteProductFromCart: any = (uid: any, productId: any) => (dispatch: any) => {
  axios.post('/api/ecommerce/delete-from-cart', { uid, productId }).then((res) => {
    dispatch({
      type: DELETE_PRODUCT_FROM_CART,
      payload: res.data,
    });
  });
};

export const updateCartAmount: any = (uid: any, productId: any, amount: any) => (dispatch: any) => {
  console.log(uid, productId, amount);
  axios.post('/api/ecommerce/update-cart-amount', { uid, productId, amount }).then((res) => {
    dispatch({
      type: UPDATE_CART_AMOUNT,
      payload: res.data,
    });
  });
};
