import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import authReducer from '../reducers/authReducer';
import { wodReducer }  from '../reducers/wodReducer';

import wodParentReducer from '../reducers/wodParentReducer';

const rootReducer = combineReducers({
	wodReducer,
	authReducer,
	wodParentReducer
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