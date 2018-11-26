import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import App from './components/App';
import reducer from './reducers';
import rootEpic from './epics';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import 'todomvc-app-css/index.css';
import './style.css';

const epicMiddleware = createEpicMiddleware();

const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger, epicMiddleware)));

epicMiddleware.run(rootEpic);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
