import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../Redux/actions/userActions';

export const User = () => {
  const dispatch = useDispatch();

  const {
    user: { userName, loggedIn },
  } = useSelector(state => state);

  const handleLogInAndOut = () => {
    if (userName) {
      dispatch(actions.LOG_OUT());
    } else {
      dispatch(actions.LOG_IN('STUARDO'));
    }
  };

  return (
    <div style={{ backgroundColor: 'green' }}>
      <h1>{userName ? `Welcome: ${userName}` : `Please Login`}</h1>
      <button onClick={handleLogInAndOut}>
        {loggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};
