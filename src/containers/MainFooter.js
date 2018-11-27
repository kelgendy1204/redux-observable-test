import { connect } from 'react-redux';
import MainFooter from '../components/MainFooter';
import { fetchTodo, cancelFetchTodo } from '../actions';

export default connect(
    null,
    { fetchTodo, cancelFetchTodo }
)(MainFooter);
