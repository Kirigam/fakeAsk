import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderComponent } from 'recompose';
import Component from './Component';
import actions from '../../modules/posts/actions';
import Loader from '../../components/Loader/Component';

const mapStateToProps = state => ({isFetching: state.posts.isFetching});

const enhancer = compose(
    connect(mapStateToProps),
    lifecycle({
        componentDidMount() {
            const { dispatch } = this.props;
            
            dispatch(actions.fetchingPosts());
        }
    }),
    branch(
        ({isFetching}) => isFetching,
        renderComponent(Loader)
    )
     
);

export default enhancer(Component);