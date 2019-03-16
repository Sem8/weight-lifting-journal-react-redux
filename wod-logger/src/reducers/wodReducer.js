import {FETCH_EXERCISE_START, FETCH_EXERCISE_SUCCESS, FETCH_EXERCISE_FAIL,
    ADD_EXERCISE_START, ADD_EXERCISE_SUCCESS, ADD_EXERCISE_FAIL,
    DELETE_EXERCISE_START, DELETE_EXERCISE_SUCCESS, DELETE_EXERCISE_FAIL,
    EDIT_EXERCISE_START, EDIT_EXERCISE_SUCCESS, EDIT_EXERCISE_FAIL
 } from '../actions';

const initialState = {
    exercises: [],
    fetching: false,
    error: null,
    creatingExercise: false,
    deletingExercise: false,
    editingExercise: false
}

export const wodReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_EXERCISE_START:
            return {
                ...state,
                fetching: true,
                error: null
            };

        case FETCH_EXERCISE_SUCCESS:
            return {
                ...state,
                exercises: [...state.exercises ,...action.payload],
                fetching: false,
                error: null                
            }
        case FETCH_EXERCISE_FAIL:
            return {
                ...state,
                fetching: false,
                error: action.payload
            };
        case ADD_EXERCISE_START:
            return {
                ...state,
                fetching: true,
                creatingExercise: true,
                error: null
            };
        case ADD_EXERCISE_SUCCESS:
            return {
                ...state,
                fetching: false,
                creatingExercise: false,
                exercises: [...state.exercises, ...action.payload],
                error: null
            };
        case ADD_EXERCISE_FAIL:
            return {
                ...state,
                fetching: false,
                creatingExercise: false,
                error: action.payload
            };
        case DELETE_EXERCISE_START:
            return {
                ...state,
                fetching: false,
                deletingExercise: true,
                error: null
            };
        case DELETE_EXERCISE_SUCCESS:
            return {
                ...state,
                exercises: [...state.exercises.filter(exercise => exercise.id !== action.payload)],
                fetching: false,
                deletingExercise: false,
                error: null
            };
        case DELETE_EXERCISE_FAIL:
            return {
                ...state,
                fetching: false,
                deletingExercise: false,
                error: action.payload                
            };
        case EDIT_EXERCISE_START:
            return {
                ...state,
                fetching: true,
                editingExercise: true,
                error: null                
            };
        case EDIT_EXERCISE_SUCCESS:
            let editedExercise = [];
            state.exercises.map(exercise => {
                let newExercise = 
                exercise.id === action.payload.id ? action.payload : exercise;
                return editedExercise.push(newExercise)
            });

            return {
                ...state,
                exercises: [...editedExercise],
                fetching: false,
                editingExercise: false,
                error: null
            };
        case EDIT_EXERCISE_FAIL:
            return {
                ...state,
                fetching: false,
                editingExercise: false,
                error: action.payload
            };

        default: 
            return state;
    }
};