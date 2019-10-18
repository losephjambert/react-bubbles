import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import user from './user.reducer';

const rootReducer = combineReducers({ user });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
