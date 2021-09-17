import React from 'react';
import './App.css';
import Provider from './context/Provider';
import StarWarsPage from './pages/StarWarsPage';

function App() {
  return (
    <Provider>
      <StarWarsPage />
    </Provider>
  );
}

export default App;
