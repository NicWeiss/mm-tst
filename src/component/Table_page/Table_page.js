import React from 'react';
import ControlPanel from './Control_panel'
import Table from './Table'
import { Component } from 'react'


class Page extends Component {

    constructor(props) {
        super(props)
        this.state = {
          update: "false",
          request_filter: ""
        }
        this.add = this.add.bind(this)
        this.getFilter = this.getFilter.bind(this)
    }

    add(){
        console.log('add new element');
        this.setState({update: "true"})
    }

    getFilter(text){
        console.log('set request filter');
        this.setState({request_filter: text})
        
    }

  render() {
    return(
        <div>
            <div>Товары</div>
            <ControlPanel onAdd={this.add} onChange={this.getFilter}/>
            <Table data={this.state}/>
        </div>
        )
    }
}

function TablePage() {
    return (<Page />);
  }
  
  export default TablePage;
  
  