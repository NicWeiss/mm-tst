import React, { Component } from 'react';
import './App.css'
import { Route, Switch, Redirect, withRouter } from "react-router-dom"

import Login from './components/LoginPage'
import Table from './components/TablePage'
import MobxTest from './components/MobxTest'


class App extends Component {
  render(){
    const { history } = this.props

    return(
      <div className="App">
        <Switch>
          <Route history={history} path='/login' component={Login} />
          <Route history={history} path='/table' component={Table} />
          <Route history={history} path='/test' component={MobxTest} />
          <Redirect from="/" to='/login' />
        </Switch>
      </div>
    )
  }
}




export default withRouter(App);

