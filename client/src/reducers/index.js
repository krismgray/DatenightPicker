import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import ideas from './ideas';


const rootReducer = combineReducers({
  user,
  flash,
  ideas,
});

export default rootReducer;
