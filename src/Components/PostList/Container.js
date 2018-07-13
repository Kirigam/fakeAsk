import { connect } from 'react-redux';
import { compose, shouldUpdate } from 'recompose';
import Component from './Component';

const mapStateToProps = (state) => ({
    posts: (state.posts.items.length !== undefined) ? createPostList(state) : {}
});

const createPostList = (state) => {
    const postList = state.posts.items;
    
    if(state.posts.search !== '' && postList !== undefined) {
        const pattern = new RegExp(state.posts.search)    
        
        const filtredPosts = postList.filter(item => item.title.match(pattern));

        return filtredPosts.slice(0, state.posts.count);
    }
    else { 
        return (postList !== undefined) ? postList.slice(0, state.posts.count) : [];
    }
};

const enhancer = compose(
    connect(mapStateToProps),
    shouldUpdate((props ,newProps) => {
        if(props.posts.length > 0 && newProps.posts.length > 0)
            return newProps.posts.map((item, i) => (item === props.posts[i]) ?  false : true);
        else
            return true;
     })
     
);

export default enhancer(Component);