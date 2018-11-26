import { FETCH_TODO } from '../constants/ActionTypes';
import { ofType  } from 'redux-observable';
import { mergeMap, map  } from 'rxjs/operators';
import { from  } from 'rxjs';
import { fetchTodo } from '../helpers';
import { fetchTodoFulfilled } from '../actions';

export const fetchTodoEpic = action$ => action$.pipe(
    ofType(FETCH_TODO),
    mergeMap(() =>
        from(fetchTodo()).pipe(
            map(response => fetchTodoFulfilled(response))
        )
    )
);
