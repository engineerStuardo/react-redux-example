import { CounterActionsTypes } from '../types/counterTypes';

const initialData = {
  cartCount: 0,
};

const cartReducer = (state = initialData, action) => {
  switch (action.type) {
    case CounterActionsTypes.ADD_ITEM:
      return {
        cartCount: ++state.cartCount,
      };
    case CounterActionsTypes.REMOVE_ITEM:
      return {
        cartCount: --state.cartCount,
      };
    default:
      return state;
  }
};

export default cartReducer;
