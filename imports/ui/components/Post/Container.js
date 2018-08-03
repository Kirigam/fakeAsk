import { connect } from 'react-redux';
import Component from './Component';
import userAction from '../../modules/user/actions';
import { compose, lifecycle } from 'recompose';

const getPostId = () => document.location.pathname.split('/').reverse()[0];

const mapStateToProps = state => {

    const postId = +getPostId();
    let userPost = {};
    
    if(state.posts.items.length > 0) {
        userPost = state.posts.items.find(item => (item.id === postId));
        
        return {
            post: (state.posts.items.id !== undefined) ? state.posts.items : userPost,
            user: state.user.info
        }
    } else {
        return {
            post: (state.posts.items.id === undefined) ? userPost : state.posts.items,
            user: state.user.info
        }
    }    
};

const enhancer = compose(
    connect(mapStateToProps),
    lifecycle({
        componentDidMount() {
            const { dispatch, post, user } = this.props;
            
            if((user.id === undefined) || (user.id !== post.userId)) {
                return dispatch(userAction(post.userId));
            }
        }
    })
);

export default enhancer(Component);