import React from 'react';
import { Component } from 'react'
import './Table_page.css'

class Panel extends Component {
    constructor(props) {
        super(props)
        this.add = this.add.bind(this)
        this.search = React.createRef()
    }
    add(e) {
        e.preventDefault();
        console.log('add element in base')
        /*const _pass = this.pass.current
        _pass.focus()*/
    }
    render() {
        return(
            <div className="flex flex_between">
                <input className="search_box" ref={this.search} type="text" placeholder="Поиск" />
                <div>
                    <button className="add accept_button" onClick={this.add}>Добавить</button>
                </div>
            </div>
        )
    }
}

function ControlPanel() {
    return (<Panel />);
  }
  
  export default ControlPanel;
  
  