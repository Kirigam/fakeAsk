import { connect } from 'react-redux';
import Component from './Component';
import actions from '../../modules/posts/actions';

const mapStateToProps = state => ({
    text: state.posts.search
});

const mapDispatchToProps = dispatch => ({
    onChange: (e) => dispatch(actions.searchPost(e.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);