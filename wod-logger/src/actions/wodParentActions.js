import axios from "axios";
import moment from "moment";

export const TOGGLE_WORKOUT_MODAL = 'TOGGLE_WORKOUT_MODAL';
export const TOGGLE_ADD_WORKOUT_FORM = 'TOGGLE_ADD_WORKOUT_FORM';
export const ADD_WORKOUT_START = 'ADD_WORKOUT_START';
export const ADD_WORKOUT_SUCCESS = 'ADD_WORKOUT_SUCCESS';
export const ADD_WORKOUT_FAILURE = 'ADD_WORKOUT_FAILURE';
export const FETCH_WORKOUTS_START = 'FETCH_WORKOUTS_START';
export const FETCH_WORKOUTS_SUCCESS = 'FETCH_WORKOUTS_SUCCESS';
export const FETCH_WORKOUTS_FAILURE = 'FETCH_WORKOUTS_FAILURE';
export const DELETE_WORKOUT_START = 'DELETE_WORKOUT_START';
export const DELETE_WORKOUT_SUCCESS = 'DELETE_WORKOUT_SUCCESS';
export const DELETE_WORKOUT_FAILURE = 'DELETE_WORKOUT_FAILURE';
export const UPDATE_WORKOUT_START = 'UPDATE_WORKOUT_START';
export const UPDATE_WORKOUT_SUCCESS = 'UPDATE_WORKOUT_SUCCESS';
export const UPDATE_WORKOUT_FAILURE = 'UPDATE_WORKOUT_FAILURE';

export const toggleWorkoutModal = () => dispatch => {
	dispatch({
		type: TOGGLE_WORKOUT_MODAL
	});
};

export const toggleAddWorkoutForm = () => dispatch => {
	dispatch({
		type: TOGGLE_ADD_WORKOUT_FORM
	});
};

export const addWorkout = (workout, userId) => dispatch => {
	dispatch({
		type: ADD_WORKOUT_START
	});

	const newWorkout = {
		date: Date.now().toString(),
		region: workout.region,
		userId: 1
	};

	axios
		.post(
			"https://weight-lifting-journal.herokuapp.com/api/restricted/journals/",
			newWorkout,
			{
				"Content-Type": "application/json",
				headers: { authorization: localStorage.getItem("token") }
			}
		)
		.then(res => {
			// console.log(res.data);
			
			dispatch({
				type: ADD_WORKOUT_SUCCESS,
				payload: res.data.journal
			});
		})
		.catch(err => {
			// console.log(err.response);
			dispatch({
				type: ADD_WORKOUT_FAILURE,
				payload: err.response.data
			});
		});
};

export const fetchWorkouts = () => dispatch => {
	dispatch({
		type: FETCH_WORKOUTS_START
	});

	axios
		.get(
			`https://weight-lifting-journal.herokuapp.com/api/restricted/journals/`,
			{
				"Content-Type": "application/json",
				headers: { authorization: localStorage.getItem("token") }
			}
		)
		.then(res => {
			console.log(res.data);
			dispatch({
				type: FETCH_WORKOUTS_SUCCESS,
				payload: res.data.journals
			});
		})
		.catch(err => {
			console.log(err);
			dispatch({
				type: FETCH_WORKOUTS_FAILURE,
				payload: err.response.data.message
			});
		});
};

export const updateWorkout = (workout, workoutId) => dispatch => {
	dispatch({
		type: UPDATE_WORKOUT_START
	});

	axios
		.put(
			`https://weight-lifting-journal.herokuapp.com/api/restricted/journals/${workoutId}`,
			workout,
			{
				"Content-Type": "application/json",
				headers: { authorization: localStorage.getItem("token") }
			}
		)
		.then(res => {
			dispatch({
				type: UPDATE_WORKOUT_SUCCESS,
				payload: res.data
			});
		})
		.catch(err => {
			dispatch({
				type: UPDATE_WORKOUT_FAILURE,
				payload: err.response.data.message
			});
		});
};

export const deleteWorkout = workoutId => dispatch => {
	dispatch({
		type: DELETE_WORKOUT_START
	});

	axios
		.delete(
			`https://weight-lifting-journal.herokuapp.com/api/restricted/journals/${workoutId}`,
			{
				"Content-Type": "application/json",
				headers: { authorization: localStorage.getItem("token") }
			}
		)
		.then(res => {
			dispatch({
				type: DELETE_WORKOUT_SUCCESS,
				payload: workoutId
			});
		})
		.catch(err => {
			dispatch({
				type: DELETE_WORKOUT_FAILURE,
				payload: err.response.data.message
			});
		});
};
