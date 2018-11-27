import { FETCH_TODO, FETCH_TODO_CANCELLED, FETCH_TODO_SYNC } from '../constants/ActionTypes';
import { ofType  } from 'redux-observable';
import { mergeMap, map, takeUntil, exhaustMap  } from 'rxjs/operators';
import { from } from 'rxjs';
import { fetchTodo } from '../helpers';
import { fetchTodoFulfilled, fetchTodoSyncFulfilled } from '../actions';

export const fetchTodoEpic = action$ => action$.pipe(
    ofType(FETCH_TODO),
    mergeMap(() =>
        from(fetchTodo()).pipe(
            map(response => fetchTodoFulfilled(response)),
            takeUntil(action$.pipe(
                ofType(FETCH_TODO_CANCELLED)
            ))
        )
    )
);

export const fetchTodoSyncEpic = action$ => action$.pipe(
    ofType(FETCH_TODO_SYNC),
    exhaustMap(() =>
        from(fetchTodo()).pipe(
            map(response => fetchTodoSyncFulfilled(response)),
            takeUntil(action$.pipe(
                ofType(FETCH_TODO_CANCELLED)
            ))
        )
    )
);
