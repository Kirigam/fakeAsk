import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderComponent } from 'recompose';
import action from '../../../modules/user/actions';
import Loader from '../../Loader/Component';
import NotFound from '../../NotFound/Component';
import Component from './Component';

const mapStateToProps = state => ({
    user: state.user.info,
    isFetching: state.user.isFetching,
    notFound: (state.user.info.id === undefined) ? true : false
});

const getUserId = () => { 
    const postId = document.location.pathname.split('/').reverse();
    return (postId.length > 3) ? false : postId[0];
};

const enhancer = compose(
    connect(mapStateToProps),
    lifecycle({
        componentDidMount() {
            const { dispatch, notFound } = this.props;
            const userId = getUserId();
            
            if(notFound) {
             return dispatch(action(userId));
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