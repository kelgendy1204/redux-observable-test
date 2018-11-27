import { connect } from 'react-redux';
import MainFooter from '../components/MainFooter';
import { fetchTodo, cancelFetchTodo, fetchTodoSync } from '../actions';

export default connect(
    null,
    { fetchTodo, fetchTodoSync, cancelFetchTodo }
)(MainFooter);
