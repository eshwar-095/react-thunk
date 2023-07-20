import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Login from './pages/Login';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <div id="route-container">
        <img src={logo} className="App-logo" alt="logo" />
        <Login></Login>
      </div>
    </div>
  </Provider>
  );
}

export default App;
