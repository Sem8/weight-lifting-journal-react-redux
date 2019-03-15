import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { wodReducer } from '../reducers/wodReducer';
import authReducer from '../reducers/authReducer';

const rootReducer = combineReducers({
	wodReducer,
	authReducer
})


const store = createStore(
	rootReducer, 
    compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ &&
			window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default store;