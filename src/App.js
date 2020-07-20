import React from 'react';
import './App.css'
import { login_check } from './controller/Login';
import LoginPage from './component/Login_page/Login_form'
import TablePage from './component/Table_page/Table_page'

function App() {

  var ifLogin = login_check()
  var output = (ifLogin) ? <TablePage /> : <LoginPage />
  return (output);
}

export default App;

