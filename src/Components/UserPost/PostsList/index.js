import React from 'react';
import v4 from 'uuid/v4';

const PostsList = ({posts}) => {
    return <ol>
            {posts.map((item, i) => <li key={i} id={v4()}>{item.title}</li>)}
           </ol>
};

const shouldUpdate = shouldUpdateCallback => BaseComponent => {
    class ShouldUpdate extends React.Component {
        shouldComponentUpdate(newProps) {
            return shouldUpdateCallback(newProps, this.props);
        }

        render() {
            return <BaseComponent {...this.props} />
        }
    }

    return ShouldUpdate;
}

const enhancer = shouldUpdate((newProps, props) => {
   return newProps.posts.map((item, i) => (item === props.posts[i]) ?  false : true);
});

const EnhancerPostList = enhancer(PostsList);

export default EnhancerPostList;