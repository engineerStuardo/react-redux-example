import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Items from './components/Items';
import { User } from './components/User';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Items />
      <User />
    </div>
  );
}

export default App;
