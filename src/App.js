import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Routes from './Routes';

function App() {

  return (
    <div className='container'>
      <Dashboard />
      <div className='renderRoutes'>
        <Routes />
      </div>
    </div>
  );
}

export default App;
