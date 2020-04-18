import React from 'react';
import { path_contants } from '../constants/path.contants';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href={path_contants.style} />
        <Home />
    </div>
  );
}

export default App;
