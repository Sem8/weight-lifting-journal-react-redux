import axios from 'axios';

export const ADD_EXERCISE_START = 'ADD_EXERCISE_START';
export const ADD_EXERCISE_SUCCESS = 'ADD_EXERCISE_SUCCESS';
export const ADD_EXERCISE_FAIL = 'ADD_EXERCISE_FAIL';


export const addExercise = exercise => dispatch => {
    dispatch({ type: ADD_EXERCISE_START });

    const {
		name, 
		reps, 
		sets, 
		weight
	} = exercise;

	let newExercise = {
        journalId: 1,		
		userId: 1,
		name,
		reps,
		sets,
		weight
    };
    
    axios
    .post(`https://weight-lifting-journal.herokuapp.com/api/restricted/exercises`, 
    newExercise,
    {
        'Content-Type': 'application/json',
        headers: { authorization: localStorage.getItem('token')}
    }
    )
    .then(res => {
        console.log(res);
        dispatch({ type: ADD_EXERCISE_SUCCESS, payload: res.data });
    }).catch(err => {
        // console.log(err);
        dispatch({ 
            type: ADD_EXERCISE_FAIL,
            payload: err.message 
        })
    })
};

export const FETCH_EXERCISE_START = 'FETCH_EXERCISE_START';
export const FETCH_EXERCISE_SUCCESS = 'FETCH_EXERCISE_SUCCESS';
export const FETCH_EXERCISE_FAIL = 'FETCH_EXERCISE_FAIL';

export const fetchExercises = () => dispatch => {
    dispatch({ type: FETCH_EXERCISE_START });
    axios
    .get(`https://weight-lifting-journal.herokuapp.com/api/restricted/exercises`,
    {
        "Content-Type": "application/json",
        headers: { authorization: localStorage.getItem('token') }
    }
    )
    .then(res => {
        dispatch({ type: FETCH_EXERCISE_SUCCESS,
        payload: res.data
    });

    })
    .catch(err => {
        dispatch({
            type: FETCH_EXERCISE_FAIL,
            // payload: err.response.data.message
            payload: err
        });
    });
};


export const DELETE_EXERCISE_START = 'DELETE_EXERCISE_START';
export const DELETE_EXERCISE_SUCCESS = 'DELETE_EXERCISE_SUCCESS';
export const DELETE_EXERCISE_FAIL = 'DELETE_EXERCISE_FAIL';


export const EDIT_EXERCISE_START = 'EDIT_EXERCISE_START';
export const EDIT_EXERCISE_SUCCESS = 'EDIT_EXERCISE_SUCCESS';
export const EDIT_EXERCISE_FAIL = 'EDIT_EXERCISE_FAIL';