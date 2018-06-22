import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./posts/reducers";

const store = createStore(reducer, undefined, composeWithDevTools(applyMiddleware(thunk))); 

export default store;