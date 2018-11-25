import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import App from './components/App';
import reducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import 'todomvc-app-css/index.css';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger)));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
