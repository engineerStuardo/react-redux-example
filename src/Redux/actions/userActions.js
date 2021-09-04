import { UserActionsTypes } from '../types/userTypes';

export const LOG_IN = user => ({
  type: UserActionsTypes.LOG_IN,
  payload: user,
});

export const LOG_OUT = () => ({
  type: UserActionsTypes.LOG_OUT,
});
