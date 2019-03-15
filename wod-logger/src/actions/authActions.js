import axios from 'axios';

import history  from '../helpers/history';

 export const LOGIN_START = 'LOGIN_START';
 export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
 export const LOGIN_FAILURE = 'LOGIN_FAILURE';

 export const REGISTER_START = 'REGISTER_START';
 export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
 export const REGISTER_FAILURE = 'REGISTER_FAILURE';
 export const PERSIST_USER = 'PERSIST_USER';

 export const persistUser = id => dispatch => {
     dispatch({
         type: PERSIST_USER,
         payload: id
     });
 };

 export const loginUser = creds => dispatch => {
     dispatch({ type: LOGIN_START });
     return axios.post('https://weight-lifting-journal.herokuapp.com/api/auth/login', creds)
     .then(res => {
         localStorage.setItem('token', res.data.token);

         dispatch({
             type: LOGIN_SUCCESS,
             payload: res.data.token
          });
          history.push('/protected');
     })
     .catch(err => {
         dispatch({
             type: LOGIN_FAILURE,
             payload: err.response.data.message
         });
     });
 };