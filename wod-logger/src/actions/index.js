import axios from 'axios';

export const ADD_EXERCISE_START = 'ADD_EXERCISE_START';
export const ADD_EXERCISE_SUCCESS = 'ADD_EXERCISE_SUCCESS';
export const ADD_EXERCISE_FAIL = 'ADD_EXERCISE_FAIL';

export const FETCH_EXERCISE_START = 'FETCH_EXERCISE_START';
export const FETCH_EXERCISE_SUCCESS = 'FETCH_EXERCISE_SUCCESS';
export const FETCH_EXERCISE_FAIL = 'FETCH_EXERCISE_FAIL';

export const DELETE_EXERCISE_START = 'DELETE_EXERCISE_START';
export const DELETE_EXERCISE_SUCCESS = 'DELETE_EXERCISE_SUCCESS';
export const DELETE_EXERCISE_FAIL = 'DELETE_EXERCISE_FAIL';

export const EDIT_EXERCISE_START = 'EDIT_EXERCISE_START';
export const EDIT_EXERCISE_SUCCESS = 'EDIT_EXERCISE_SUCCESS';
export const EDIT_EXERCISE_FAIL = 'EDIT_EXERCISE_FAIL';


export const addExercise = (exercise, journalId, userId) => dispatch => {
	dispatch({
		type: ADD_EXERCISE_START
	});

	const { name, reps, sets, weight } = exercise;

	const newExercise = {
		journalId: 1,
		userId: 1,
		name,
		reps,
		sets,
		weight
	};

	axios
		.post(
			`https://weight-lifting-journal.herokuapp.com/api/restricted/exercises/`,
			newExercise,
			{
				"Content-Type": "application/json",
				headers: { authorization: localStorage.getItem("token") }
			}
		)
		.then(res => {
			console.log(res.data);
			dispatch({
				type: ADD_EXERCISE_SUCCESS,
				payload: res.data.exercise
			});
		})
		.catch(err => {
			console.log(err.response);
			dispatch({
				type: ADD_EXERCISE_FAIL,
				payload: err.message
			});
		});
};

export const fetchExercises = journalId => dispatch => {
	dispatch({
		type: FETCH_EXERCISE_START
	});

	axios
		.get(
			`https://weight-lifting-journal.herokuapp.com/api/restricted/exercises/journal/${journalId}`,
			{
				"Content-Type": "application/json",
				headers: { authorization: localStorage.getItem("token") }
			}
		)
		.then(res => {
			dispatch({
				type: FETCH_EXERCISE_SUCCESS,
				payload: res.data.exercises
			});
		})
		.catch(err => {
			dispatch({
				type: FETCH_EXERCISE_FAIL,
				payload: err.response.data.message
			});
		});
};

export const updateExercise = (exercise, exerciseId) => dispatch => {
	dispatch({
		type: EDIT_EXERCISE_START
	});

	axios
		.put(
			`https://weight-lifting-journal.herokuapp.com/api/restricted/exercises/${exerciseId}`,
			exercise,
			{
				"Content-Type": "application/json",
				headers: { authorization: localStorage.getItem("token") }
			}
		)
		.then(res => {
			// console.log(res);
			dispatch({
				type: EDIT_EXERCISE_SUCCESS,
				payload: res.data
			});
		})
		.catch(err => {
			// console.log(err);
			dispatch({
				type: EDIT_EXERCISE_FAIL,
				payload: err.response.data.message
			});
		});
};

export const deleteExercise = exerciseId => dispatch => {
	dispatch({
		type: DELETE_EXERCISE_START
	});

	axios
		.delete(
			`https://weight-lifting-journal.herokuapp.com/api/restricted/exercises/${exerciseId}`,
			{
				"Content-Type": "application/json",
				headers: { authorization: localStorage.getItem("token") }
			}
		)
		.then(res => {
			dispatch({
				type: DELETE_EXERCISE_SUCCESS,
				payload: exerciseId
			});
		})
		.catch(err => {
			dispatch({
				type: DELETE_EXERCISE_FAIL,
				payload: err.response.data.message
			});
		});
};
