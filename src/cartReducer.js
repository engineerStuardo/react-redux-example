const initialData = {
  cartCount: 0,
};

const cartReducer = (state = initialData, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        cartCount: ++state.cartCount,
      };
    case 'REMOVE_ITEM':
      return {
        cartCount: --state.cartCount,
      };
    default:
      return state;
  }
};

export default cartReducer;
