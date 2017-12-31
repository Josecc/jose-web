import { combineReducers } from 'redux';
import {getPosts} from './posts';

export default combineReducers({
  posts: getPosts,
});
