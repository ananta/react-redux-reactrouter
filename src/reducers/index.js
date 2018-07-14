import { combineReducers } from 'redux';
import posts from './postReducer';
import {
    routerReducer,
  } from "react-router-redux";

export default combineReducers({
    posts: posts,
    router: routerReducer
});