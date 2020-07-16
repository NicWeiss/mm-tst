import React from 'react';
import './App.css';
import Login, { login_check, login_in } from './controller/Login';

function App() {
  var ifLogin = login_check()
  return (ifLogin);
}

export default App;
