import { combineReducers } from 'redux';

import cartReducer from './reducers/counterReducer';

const rootReducer = combineReducers({
  counter: cartReducer,
});

export default rootReducer;
