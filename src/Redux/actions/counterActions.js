import { CounterActionsTypes } from '../types/counterTypes';

export const ADD_ITEM = () => {
  return {
    type: CounterActionsTypes.ADD_ITEM,
  };
};

export const REMOVE_ITEM = () => {
  return {
    type: CounterActionsTypes.REMOVE_ITEM,
  };
};
