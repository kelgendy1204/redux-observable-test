import React from 'react';
import PropTypes from 'prop-types';

const MainFooter = ({ fetchTodo, cancelFetchTodo, fetchTodoSync, concatFetchTodo }) => (
    <footer className="main">
        <button className="pure-material-button-contained" style={{ marginLeft: 5 , marginBottom: 5 }} onClick={fetchTodo}>
            Fetch Todo
        </button>
        <button className="pure-material-button-contained" style={{ marginLeft: 5 , marginBottom: 5 }} onClick={cancelFetchTodo}>
            Cancel Fetch Todo
        </button>
        <button className="pure-material-button-contained" style={{ marginLeft: 5, marginBottom: 5 }} onClick={fetchTodoSync}>
            Fetch todos sync
        </button>
        <button className="pure-material-button-contained" style={{ marginLeft: 5, marginBottom: 5 }} onClick={concatFetchTodo}>
            Concat Fetch todos
        </button>
    </footer>
);

MainFooter.propTypes = {
    fetchTodo: PropTypes.func,
    fetchTodoSync: PropTypes.func,
    concatFetchTodo: PropTypes.func,
    cancelFetchTodo: PropTypes.func
};

export default MainFooter;
