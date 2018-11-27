import { FETCH_TODO, FETCH_TODO_CANCELLED } from '../constants/ActionTypes';
import { ofType  } from 'redux-observable';
import { mergeMap, map, takeUntil  } from 'rxjs/operators';
import { from  } from 'rxjs';
import { fetchTodo } from '../helpers';
import { fetchTodoFulfilled } from '../actions';

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
