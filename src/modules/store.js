import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
//import { persistStore, } from 'redux-persist';
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./index";

const store = createStore(reducer, undefined, composeWithDevTools(applyMiddleware(thunk))); 

//persistStore(store, {whitelist: ['posts']});

export default store;