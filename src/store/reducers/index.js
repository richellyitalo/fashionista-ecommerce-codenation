import { combineReducers } from 'redux';
import app from './app';
import produto from './produto';
import cart from './cart';

export default combineReducers({ app, produto, cart });
