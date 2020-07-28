import React from 'react';
import './App.css'
import { login_check } from './controller/Login';
import LoginPage from './component/LoginPage'
import TablePage from './component/TablePage'

function App() {

  var ifLogin = login_check()
  var output = (ifLogin) ? <TablePage /> : <LoginPage />
  return (output);
}

export default App;

