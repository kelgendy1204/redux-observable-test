import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import App from './components/App';
import reducer from './reducers';
import rootEpic from './epics';
import { createEpicMiddleware } from 'redux-observable';
import createReduxWaitForMiddleware from 'redux-wait-for-action';
import { composeWithDevTools } from 'redux-devtools-extension';
import 'todomvc-app-css/index.css';
import './style.css';
// import './playground';

const epicMiddleware = createEpicMiddleware();
const waitForActionMiddleware = createReduxWaitForMiddleware();

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(logger, epicMiddleware, waitForActionMiddleware))
);

epicMiddleware.run(rootEpic);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
