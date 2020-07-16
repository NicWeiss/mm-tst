import React from 'react';
import { Component } from 'react'
import './Table_page.css'
import { login_out } from '../../controller/Login'

class Panel extends Component {
    constructor(props) {
        super(props)
        this.add = this.add.bind(this)
        this.logout = this.logout.bind(this)
        this.search = this.search.bind(this)
        this.search_text = React.createRef()
    }
    add(e) {
        e.preventDefault();
        console.log('add element in base')
    }
    search(e) {
        e.preventDefault();
        const _search_text = this.search_text.current
        console.log(_search_text.value)
        _search_text.focus()
    }
    logout(e) {
        e.preventDefault();
        console.log('logout')
        doLogout()
    }
    render() {
        return(
            <div className="flex flex_between">
                <input className="search_box" ref={this.search_text} onChange={this.search} type="text" placeholder="Поиск" />
              <div> 
                <button className="add accept_button" onClick={this.add}>Добавить</button>
                <button className="add cancel_button" onClick={this.logout}>Выйти</button>
               </div>
            </div>
        )
    }
}

const doLogout = () => {
    if (login_out()) window.location.reload(true);
} 

function ControlPanel() {
    return (<Panel />);
  }
  
  export default ControlPanel;
  
  