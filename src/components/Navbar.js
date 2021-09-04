import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const {
    counter: { cartCount },
  } = useSelector(state => state);

  return (
    <div style={{ backgroundColor: 'orange' }}>
      <h1 style={{ color: 'white' }}>
        This is Navbar Component - Number of items in Cart: {cartCount}
      </h1>
    </div>
  );
};

export default Navbar;
