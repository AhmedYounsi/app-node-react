import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import user from './user'
import event from './event'


export default combineReducers({
  alert,
  auth,
  user,
  event
});