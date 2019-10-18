import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import user from './user.reducer';
import colors from './colors.reducer';

const rootReducer = combineReducers({ user, colors });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
