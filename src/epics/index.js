import { combineEpics  } from 'redux-observable';
import { fetchTodoEpic, fetchTodoSyncEpic } from './todos-epics';

const rootEpic = combineEpics(
    fetchTodoEpic,
    fetchTodoSyncEpic
);

export default rootEpic;
