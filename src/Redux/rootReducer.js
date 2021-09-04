import { combineReducers } from 'redux';

import cartReducer from './reducers/counterReducer';
import { userReducer } from './reducers/userReducer';

const rootReducer = combineReducers({
  counter: cartReducer,
  user: userReducer,
});

export default rootReducer;
