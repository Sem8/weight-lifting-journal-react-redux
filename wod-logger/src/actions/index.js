import axios from 'axios';

export const ADD_EXERCISE_START = 'ADD_EXERCISE_START';
export const ADD_EXERCISE_SUCCESS = 'ADD_EXERCISE_SUCCESS';
export const ADD_EXERCISE_FAIL = 'ADD_EXERCISE_FAIL';

export const addExercise = exercise => dispatch => {
    dispatch({ type: ADD_EXERCISE_START });

    const {
		currentWeight,
		maxWeight,
		workoutDate,
		workoutName,
		workoutNotes,
		workoutReps,
		workoutSets,
		workoutSubtype,
		workoutTime,
		workoutType,
		workoutDistance
	} = exercise;

	let newExercise = {
		workout_name: workoutName,
		workout_date: workoutDate,
		workout_type: workoutType,
		workout_subtype: workoutSubtype,
		workout_reps: parseInt(workoutReps, 10),
		workout_sets: parseInt(workoutSets, 10),
		workout_time: parseInt(workoutTime, 10),
		workout_distance: parseInt(workoutDistance, 10),
		workout_notes: workoutNotes,
		body_region: null,
		max_weight: parseInt(maxWeight, 10),
		current_weight: parseInt(currentWeight, 10),
		user_id: 1
    };
    
    axios
    .post(`https://weight-lifting-journal.herokuapp.com/api/restricted/journals/`, 
    newExercise,
    // {
    //     'Content-Type': 'application/json',
    //     headers: { authorization: localStorage.getItem('token')}
    // }
    )
    .then(res => {
        console.log(res);
        dispatch({ type: ADD_EXERCISE_SUCCESS, payload: res.data.journal });
    }).catch(err => {
        // console.log(err);
        dispatch({ 
            type: ADD_EXERCISE_FAIL,
            payload: err.response.data.message 
        })
    })
};

export const FETCH_EXERCISE_START = 'FETCH_EXERCISE_START';
export const FETCH_EXERCISE_SUCCESS = 'FETCH_EXERCISE_SUCCESS';
export const FETCH_EXERCISE_FAIL = 'FETCH_EXERCISE_FAIL';

export const fetchExercises = id => dispatch => {
    dispatch({ type: FETCH_EXERCISE_START });
    axios
    .get(`https://weight-lifting-journal.herokuapp.com/api/restricted/exercises/journal/1`,
    // {
    //     "Content-Type": "application/json",
    //     headers: { authorization: localStorage.getItem("token") }
    // }
    )
    .then(res => {
        dispatch({ type: FETCH_EXERCISE_SUCCESS,
        payload: res.data.exercise
    });

    })
    .catch(err => {
        dispatch({
            type: FETCH_EXERCISE_FAIL,
            payload: err.response.data.message
        });
    });
};




export const DELETE_EXERCISE_START = 'DELETE_EXERCISE_START';
export const DELETE_EXERCISE_SUCCESS = 'DELETE_EXERCISE_SUCCESS';
export const DELETE_EXERCISE_FAIL = 'DELETE_EXERCISE_FAIL';


export const EDIT_EXERCISE_START = 'EDIT_EXERCISE_START';
export const EDIT_EXERCISE_SUCCESS = 'EDIT_EXERCISE_SUCCESS';
export const EDIT_EXERCISE_FAIL = 'EDIT_EXERCISE_FAIL';