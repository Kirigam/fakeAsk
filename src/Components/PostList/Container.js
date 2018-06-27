import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle, shouldUpdate, branch, renderComponent } from 'recompose';
import Component from './Component';
import actions from '../../modules/posts/actions';
import { Link } from 'react-router-dom';
import Loader from '../Loader/Component';

const mapStateToProps = (state) => ({
    posts: createPostList(state), 
    isFetching: state.posts.isFetching
});

const createPostList = (state) => {
    const postList = state.posts.items.map(item => {
        return {title: <Link to={{
            pathname: '/posts/' + item.id
        }}>{item.title}</Link>, id: item.id}
    });
    
    if(state.posts.search !== '' && postList !== undefined) {
        const pattern = new RegExp(state.posts.search)    
        
        const filtredPosts = postList.filter(item => {
            if(item.title.props.children.match(pattern)) {
              return item;
            }
          });

        return filtredPosts.slice(0, state.posts.count);
    }
    else { 
        return (postList !== undefined) ? postList.slice(0, state.posts.count) : [];
    }
};

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
    ),
    shouldUpdate((props ,newProps) => {
        if((props.posts.length && newProps.posts.length) > 0)
            return newProps.posts.map((item, i) => (item === props.posts[i]) ?  false : true);
        else
            return true;
     })
     
);

export default enhancer(Component);