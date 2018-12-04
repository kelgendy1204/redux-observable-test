import { connect } from 'react-redux';
import MainFooter from '../components/MainFooter';
import { fetchTodo, cancelFetchTodo, fetchTodoSync, concatFetchTodo } from '../actions';

export default connect(
    null,
    dispatch => {
        return {
            fetchTodo: () => dispatch(fetchTodo()),
            fetchTodoSync: cb => dispatch(fetchTodoSync()).then(cb),
            cancelFetchTodo: () => dispatch(cancelFetchTodo()),
            concatFetchTodo: cb => dispatch(concatFetchTodo()).then(cb),
        };
    }
)(MainFooter);
