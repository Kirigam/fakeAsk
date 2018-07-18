import { connect } from 'react-redux';
import { branch, renderComponent, compose } from 'recompose';
import Loader from '../Loader/Component';
import Component from  '../PostList/Component';

const filtredPosts = (posts, userId) => posts.filter(item => (item.userId === userId));

const mapStateToProps = state => ({
    posts: filtredPosts(state.posts.items, state.user.info.id),
    colValue: '10',
    isFetching: state.posts.isFetching
});

const enhancer = compose(
    connect(mapStateToProps),
    branch(
        ({isFetching}) => isFetching,
        renderComponent(Loader)
    )
);

export default enhancer(Component);