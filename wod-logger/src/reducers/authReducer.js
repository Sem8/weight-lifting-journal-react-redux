
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, PERSIST_USER } from '../actions/authActions';

const initialState = {
    token: localStorage.getItem('token'),
    currentUser: null,
    fetching: false,
    errors: null
};

export default (state = initialState, action) => {
    switch(action.type) {
        case PERSIST_USER:
            return {
                ...state,
                currentUser: action.payload
            };
        case LOGIN_START:
            return {
                ...state,
                fetching: true,
                errors: null                
            };
        case LOGIN_SUCCESS: 
            return {
                ...state,
                token: action.payload,
                fetching: false,
                errors: null
            };
        case LOGIN_FAILURE: 
            return {
                ...state,
                fetching: false,
                errors: action.payload                
            };
        default:
            return state;
    }
};


