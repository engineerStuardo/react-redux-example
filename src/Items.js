import React from 'react';
import { useDispatch } from 'react-redux';

const Items = () => {
  const dispatch = useDispatch();

  const addItem = () => {
    dispatch({ type: 'ADD_ITEM' });
  };
  const removeItem = () => {
    dispatch({ type: 'REMOVE_ITEM' });
  };

  return (
    <div style={{ backgroundColor: 'purple', paddingBottom: '25px' }}>
      <h1 style={{ color: 'white' }}>This is Items Component</h1>
      <button
        style={{
          marginRight: '10px',
          borderRadius: '5px',
          padding: '10px',
          borderColor: 'white',
          fontSize: '15px',
          color: 'green',
        }}
        onClick={addItem}
      >
        Add item
      </button>
      <button
        style={{
          borderRadius: '5px',
          padding: '10px',
          borderColor: 'white',
          fontSize: '15px',
          color: 'red',
        }}
        onClick={removeItem}
      >
        Remove item
      </button>
    </div>
  );
};

export default Items;
