import { combineEpics  } from 'redux-observable';
import { fetchTodoEpic } from './todos-epics';

const rootEpic = combineEpics(fetchTodoEpic);

export default rootEpic;
