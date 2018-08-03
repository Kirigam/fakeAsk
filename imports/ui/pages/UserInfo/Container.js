import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderComponent } from 'recompose';
import userAction from '../../modules/user/actions';
import postsActions from '../../modules/posts/actions';
import Loader from '../../components/Loader/Component';
import NotFound from '../../components/NotFound/Component';
import Component from './Component';

const mapStateToProps = state => ({
    user: state.user.info,
    isFetching: state.user.isFetching,
    notFound: (state.user.info.id === undefined) ? true : false,
    posts: state.posts.items
});

const getUserId = () => { 
    const postId = document.location.pathname.split('/').reverse();
    return (postId.length > 3) ? false : postId[0];
};

const enhancer = compose(
    connect(mapStateToProps),
    lifecycle({
        componentDidMount() {
            const { dispatch, notFound, posts } = this.props;
            const userId = getUserId();
            
            if(notFound) {
                dispatch(userAction(userId));
            }
            
            if(posts.length < 1) {
                return dispatch(postsActions.fetchingPosts('?userId=' + userId))
            }
        }
    }),
    branch(
        ({isFetching}) => isFetching,
        renderComponent(Loader)
    ),
    branch(
        ({notFound}) => notFound,
        renderComponent(NotFound)
    )
);

export default enhancer(Component);