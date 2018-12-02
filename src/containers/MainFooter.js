import { connect } from 'react-redux';
import MainFooter from '../components/MainFooter';
import { fetchTodo, cancelFetchTodo, fetchTodoSync, concatFetchTodo } from '../actions';

export default connect(
    null,
    { fetchTodo, fetchTodoSync, cancelFetchTodo, concatFetchTodo }
)(MainFooter);
