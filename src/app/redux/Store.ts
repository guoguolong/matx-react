import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './reducers/RootReducer';

const initialState = {};
const middlewares = [thunk];
let devtools: any = (x: any) => x;

if (
  typeof process === 'object' &&
  process.env.NODE_ENV !== 'production' &&
  (process as any).browser &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__
) {
  devtools = (window as any).__REDUX_DEVTOOLS_EXTENSION__();
}

export const Store = createStore(
  RootReducer,
  initialState,
  compose(applyMiddleware(...middlewares), devtools)
);
