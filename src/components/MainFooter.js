import React from 'react';
import PropTypes from 'prop-types';

const MainFooter = ({ fetchTodo, cancelFetchTodo, fetchTodoSync }) => (
    <footer className="main">
        <button className="pure-material-button-contained" onClick={fetchTodo}>
            Fetch Todo
        </button>
        <button className="pure-material-button-contained" style={{ marginLeft: 5 }} onClick={cancelFetchTodo}>
            Cancel Fetch Todo
        </button>
        <button className="pure-material-button-contained" style={{ marginLeft: 5 }} onClick={fetchTodoSync}>
            Fetch todos sync
        </button>
    </footer>
);

MainFooter.propTypes = {
    fetchTodo: PropTypes.func,
    fetchTodoSync: PropTypes.func,
    cancelFetchTodo: PropTypes.func
};

export default MainFooter;
