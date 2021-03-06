import {
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO,
    COMPLETE_TODO,
    COMPLETE_ALL_TODOS,
    CLEAR_COMPLETED,
    FETCH_TODO_FULFILLED,
    CONCAT_FETCH_TODO_FULFILLED,
    FETCH_TODO_SYNC_FULFILLED
} from '../constants/ActionTypes';

const initialState = [];

export default function todos(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                    completed: false,
                    text: action.text
                }
            ];

        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.id);

        case EDIT_TODO:
            return state.map(
                todo => (todo.id === action.id ? { ...todo, text: action.text } : todo)
            );

        case COMPLETE_TODO:
            return state.map(
                todo => (todo.id === action.id ? { ...todo, completed: !todo.completed } : todo)
            );

        case FETCH_TODO_FULFILLED:
        case FETCH_TODO_SYNC_FULFILLED:
        case CONCAT_FETCH_TODO_FULFILLED:
            return [
                ...state,
                {
                    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                    completed: false,
                    text: action.text
                }
            ];

        case COMPLETE_ALL_TODOS:
            const areAllMarked = state.every(todo => todo.completed);
            return state.map(todo => ({
                ...todo,
                completed: !areAllMarked
            }));

        case CLEAR_COMPLETED:
            return state.filter(todo => todo.completed === false);

        default:
            return state;
    }
}
