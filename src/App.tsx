import React from 'react';
import { Home, Menu } from './components/index';

function App() {
  return (
    <div className="flex bg-gray-200">
      <Menu />
      <Home />
    </div>
  );
}

export default App;
