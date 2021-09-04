import { UserActionsTypes } from '../types/userTypes';

const initialState = {
  userName: 'Italo',
  loggedIn: true,
};

export const userReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case UserActionsTypes.LOG_IN:
      return {
        ...state,
        userName: actions.payload,
        loggedIn: true,
      };
    case UserActionsTypes.LOG_OUT:
      return {
        ...state,
        userName: '',
        loggedIn: false,
      };
    default:
      return state;
  }
};
