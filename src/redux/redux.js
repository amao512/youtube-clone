import { createStore, combineReducers, applyMiddleware } from "redux";
import videosReducer from './videosReducer';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
    videos: videosReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;