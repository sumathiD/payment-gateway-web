import React from 'react';
import logo from './logo.svg';
import './components/styles.css';
import Dashboard from './components/Dashboard';
import HeaderPage from './components/headerPage';

// import './components/style.scss';
function App() {
  return (
    <div className="overall_background_color" >
      <HeaderPage />
      <Dashboard />

    </div>
  );
}

export default App;
