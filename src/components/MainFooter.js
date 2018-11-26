import React from 'react';
import PropTypes from 'prop-types';

const MainFooter = ({ fetchTodo }) => (
    <footer className="main">
            <button className="pure-material-button-contained" onClick={fetchTodo}>
            Fetch Todos
        </button>
    </footer>
);

MainFooter.propTypes = {
    fetchTodo: PropTypes.func
};

export default MainFooter;
