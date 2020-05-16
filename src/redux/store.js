import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import videosReducer from './reducers/videosReducer';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
    videos: videosReducer,
});

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(reducers, storeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;