import { combineReducers } from 'redux';
import posts from './posts/reducers';
import comments from './comments/reducers';
import user from './user/reducers';

const reducer = combineReducers({
    posts,
    comments
});

export default reducer;