import * as types from '../constants/ActionTypes';
import { WAIT_FOR_ACTION } from 'redux-wait-for-action';

export const addTodo = text => ({ type: types.ADD_TODO, text });
export const deleteTodo = id => ({ type: types.DELETE_TODO, id });
export const editTodo = (id, text) => ({ type: types.EDIT_TODO, id, text });
export const completeTodo = id => ({ type: types.COMPLETE_TODO, id });
export const completeAllTodos = () => ({ type: types.COMPLETE_ALL_TODOS });
export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED });
export const setVisibilityFilter = filter => ({ type: types.SET_VISIBILITY_FILTER, filter });

export const fetchTodo = () => ({ type: types.FETCH_TODO });
export const fetchTodoFulfilled = text => ({ type: types.FETCH_TODO_FULFILLED, text });

export const cancelFetchTodo = text => ({ type: types.FETCH_TODO_CANCELLED });

export const fetchTodoSync = () => ({
    type: types.FETCH_TODO_SYNC,
    [ WAIT_FOR_ACTION ]: types.FETCH_TODO_SYNC_FULFILLED,
});
export const fetchTodoSyncFulfilled = text => ({ type: types.FETCH_TODO_SYNC_FULFILLED, text });

export const concatFetchTodo = () => ({ type: types.CONCAT_FETCH_TODO });
export const concatFetchTodoFulfilled = text => ({ type: types.CONCAT_FETCH_TODO_FULFILLED, text });
