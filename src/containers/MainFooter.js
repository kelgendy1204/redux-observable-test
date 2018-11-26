import { connect } from 'react-redux';
import MainFooter from '../components/MainFooter';
import { fetchTodo } from '../actions';

export default connect(
    null,
    { fetchTodo }
)(MainFooter);
