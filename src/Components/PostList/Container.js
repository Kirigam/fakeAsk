import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle, shouldUpdate } from 'recompose';
import Component from './Component';
import actions from '../../modules/posts/actions';

const mapStateToProps = (state) => {
    if(state.search !== '' && state.items !== undefined) {
        const pattern = new RegExp(state.search)
        const filtredPosts = state.items.filter(item => {
            if(item.title.match(pattern)) {
              return item;
            }
          });
          
        return {
            posts: filtredPosts.slice(0, state.count)
        }
    }
    else return {
        posts: (state.items !== undefined) ? state.items.slice(0, state.count) : []
    }
};

const enhancer = compose(
    connect(mapStateToProps),
    lifecycle({
        componentDidMount() {
            const { dispatch } = this.props;
            
            dispatch(actions.startFetchingPosts());
        }
    }),
    shouldUpdate((props ,newProps) => {
        if((props.posts.length && newProps.posts.length) > 0)
            return newProps.posts.map((item, i) => (item === props.posts[i]) ?  false : true);
        else
            return true;
     })
);

export default enhancer(Component);