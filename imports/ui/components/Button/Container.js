import { connect } from 'react-redux';
import Component from './Component';
import actions from '../../modules/posts/actions';

const mapStateToProps = state => ({
    text: 'More'
});

const mapDispatchToProps = dispatch => ({
    onClick: () => dispatch(actions.increaseCount())
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);