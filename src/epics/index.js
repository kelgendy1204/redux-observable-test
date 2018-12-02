import { combineEpics  } from 'redux-observable';
import { fetchTodoEpic, fetchTodoSyncEpic, concatFetchTodoEpic } from './todos-epics';

const rootEpic = combineEpics(
    fetchTodoEpic,
    fetchTodoSyncEpic,
    concatFetchTodoEpic
);

export default rootEpic;
